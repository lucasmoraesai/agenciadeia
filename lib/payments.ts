export type PayMethod = "pix" | "btc" | "eth";

export const PAY_METHODS: {
  id: PayMethod;
  label: string;
  hint: string;
}[] = [
  { id: "pix", label: "PIX", hint: "Nubank · instantâneo" },
  { id: "btc", label: "Bitcoin", hint: "Nubank Cripto · BTC" },
  { id: "eth", label: "Ethereum", hint: "Nubank Cripto · ETH" },
];

export function qrImageUrl(data: string, size = 220) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&ecc=M&data=${encodeURIComponent(data)}`;
}

/** Remove acentos e limita tamanho (regra Bacen para campos EMV). */
function pixSanitize(value: string, max: number) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .trim()
    .toUpperCase()
    .slice(0, max);
}

function tlv(id: string, value: string) {
  const len = String(value.length).padStart(2, "0");
  return `${id}${len}${value}`;
}

/** CRC16-CCITT (poly 0x1021) exigido no campo 63 do BR Code PIX. */
function crc16Ccitt(payload: string) {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let bit = 0; bit < 8; bit++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

export type PixPayloadInput = {
  key: string;
  name: string;
  city: string;
  /** Valor em BRL (ex.: 3000). Se omitido, QR estático sem valor fixo. */
  amount?: number;
  /** Identificador da transação; "***" = reutilizável. */
  txid?: string;
};

/**
 * Gera payload EMV (PIX Copia e Cola / QR Code estático com valor).
 * Spec Bacen: Merchant Presented Mode.
 */
export function buildPixPayload({
  key,
  name,
  city,
  amount,
  txid = "***",
}: PixPayloadInput) {
  const merchantAccount = tlv("00", "BR.GOV.BCB.PIX") + tlv("01", key.trim());

  const amountField =
    typeof amount === "number" && amount > 0
      ? tlv("54", amount.toFixed(2))
      : "";

  const additional = tlv("05", (txid || "***").slice(0, 25));

  const body =
    tlv("00", "01") +
    tlv("26", merchantAccount) +
    tlv("52", "0000") +
    tlv("53", "986") +
    amountField +
    tlv("58", "BR") +
    tlv("59", pixSanitize(name || "RECEBEDOR", 25)) +
    tlv("60", pixSanitize(city || "SAO PAULO", 15)) +
    tlv("62", additional) +
    "6304";

  return body + crc16Ccitt(body);
}

/** ETH decimal string → wei (inteiro decimal, EIP-681). */
export function ethAmountToWei(ethAmount: string) {
  const cleaned = ethAmount.trim();
  if (!/^\d+(\.\d+)?$/.test(cleaned)) return null;
  const [whole, frac = ""] = cleaned.split(".");
  const fracPadded = `${frac}000000000000000000`.slice(0, 18);
  const wei =
    BigInt(whole || "0") * BigInt("1000000000000000000") + BigInt(fracPadded);
  return wei.toString();
}

export type PaymentQrInput = {
  method: PayMethod;
  pixKey: string;
  pixName: string;
  pixCity: string;
  btcAddress: string;
  ethAddress: string;
  amountBrl: number;
  /** Quantidade formatada em BTC ou ETH (string decimal). */
  cryptoAmount?: string | null;
};

/** Conteúdo ideal do QR + texto para copiar, por método. */
export function buildPaymentPayload(input: PaymentQrInput) {
  const { method, amountBrl, cryptoAmount } = input;

  if (method === "pix") {
    const copiaECola = buildPixPayload({
      key: input.pixKey,
      name: input.pixName,
      city: input.pixCity,
      amount: amountBrl,
    });
    return {
      qrData: copiaECola,
      copyValue: copiaECola,
      copyLabel: "PIX Copia e Cola",
      secondaryLabel: "Chave PIX",
      secondaryValue: input.pixKey,
    };
  }

  if (method === "btc") {
    const params = new URLSearchParams();
    if (cryptoAmount) params.set("amount", cryptoAmount);
    params.set("label", "nohumans");
    params.set("message", `Checkout nohumans ${amountBrl.toFixed(2)} BRL`);
    const uri = `bitcoin:${input.btcAddress}?${params.toString()}`;
    return {
      qrData: uri,
      copyValue: input.btcAddress,
      copyLabel: "Endereço BTC",
      secondaryLabel: cryptoAmount ? "Valor BTC" : null,
      secondaryValue: cryptoAmount ?? null,
    };
  }

  // ETH — EIP-681 com chainId mainnet e value em wei quando possível
  const wei = cryptoAmount ? ethAmountToWei(cryptoAmount) : null;
  const uri = wei
    ? `ethereum:${input.ethAddress}@1?value=${wei}`
    : `ethereum:${input.ethAddress}@1`;
  return {
    qrData: uri,
    copyValue: input.ethAddress,
    copyLabel: "Endereço ETH",
    secondaryLabel: cryptoAmount ? "Valor ETH" : null,
    secondaryValue: cryptoAmount ?? null,
  };
}

export async function fetchCryptoAmount(brl: number, asset: "btc" | "eth") {
  const id = asset === "btc" ? "bitcoin" : "ethereum";
  const res = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=brl`,
  );
  if (!res.ok) throw new Error("Não foi possível cotar agora.");
  const json = (await res.json()) as Record<string, { brl?: number }>;
  const rate = json[id]?.brl;
  if (!rate || rate <= 0) throw new Error("Cotação inválida.");
  const amount = brl / rate;
  return {
    amount,
    rate,
    formatted: asset === "btc" ? amount.toFixed(8) : amount.toFixed(6),
  };
}
