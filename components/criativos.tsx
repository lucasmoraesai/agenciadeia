"use client";

import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type FormEvent,
} from "react";
import { toPng } from "html-to-image";
import { Check, Copy, Download, RotateCcw } from "lucide-react";

const ACCENTS = [
  { name: "Ciano", value: "#00e5ff" },
  { name: "Magenta", value: "#ff2ec4" },
  { name: "Lima", value: "#a3ff12" },
];

const FORMATS = [
  { id: "square", label: "Post 1:1", w: 1080, h: 1080 },
  { id: "story", label: "Story 9:16", w: 1080, h: 1920 },
  { id: "feed", label: "Feed 4:5", w: 1080, h: 1350 },
  { id: "wide", label: "Ads 16:9", w: 1280, h: 720 },
];

type LayoutId = "centered" | "split" | "price" | "terminal" | "bento";

const LAYOUTS: { id: LayoutId; label: string }[] = [
  { id: "centered", label: "Centralizado" },
  { id: "split", label: "Dividido" },
  { id: "price", label: "Preço" },
  { id: "terminal", label: "Terminal" },
  { id: "bento", label: "Bento" },
];

type Assunto = {
  id: string;
  label: string;
  headline: string;
  sub: string;
  cta: string;
};

const ASSUNTOS: Assunto[] = [
  {
    id: "anuncio",
    label: "Anúncio",
    headline: "Sua empresa no piloto automático.",
    sub: "Automação e IA, growth e software — tudo em uma assinatura.",
    cta: "Falar no WhatsApp",
  },
  {
    id: "promocao",
    label: "Promoção",
    headline: "Tudo incluso. Um só preço.",
    sub: "Horas ilimitadas · entrega em até 48h · sem fidelidade.",
    cta: "R$ 6.000/mês",
  },
  {
    id: "manifesto",
    label: "Manifesto",
    headline: "O time que você não precisa contratar.",
    sub: "Três agências. Um só lugar.",
    cta: "nohumans",
  },
  {
    id: "agencia-ia",
    label: "Agência de IA",
    headline: "Agentes de IA 24/7.",
    sub: "Atendimento, vendas e operação — sem contratar ninguém.",
    cta: "Ver Agência",
  },
  {
    id: "growth",
    label: "Growth",
    headline: "Marketing no piloto automático.",
    sub: "Campanhas, conteúdo e criativos criados e otimizados por IA.",
    cta: "Escalar agora",
  },
  {
    id: "software",
    label: "Software e UX",
    headline: "Software sob medida, em dias.",
    sub: "Sistemas, apps e interfaces construídos com vibe coding.",
    cta: "Construir meu produto",
  },
  {
    id: "economia",
    label: "Economia",
    headline: "Um time inteiro por uma fração do custo.",
    sub: "Automação, growth e software — sem pagar R$ 20.000/mês.",
    cta: "R$ 6.000/mês",
  },
  {
    id: "prazo",
    label: "Prazo 48h",
    headline: "Você pede. A gente entrega em 48h.",
    sub: "Uma demanda por vez, horas ilimitadas, sem fidelidade.",
    cta: "Pedir agora",
  },
  {
    id: "oferta",
    label: "Oferta",
    headline: "3 agências. 1 assinatura.",
    sub: "Automação e IA, growth, e software e UX — tudo incluso.",
    cta: "Falar no WhatsApp",
  },
  {
    id: "anti-agencia",
    label: "Anti-agência",
    headline: "Chega de agência que não entrega.",
    sub: "A nohumans entrega em até 48h — ou você não paga no mês seguinte.",
    cta: "Testar agora",
  },
];

/* ============================================================
   Edição direto na peça
   ============================================================ */

type Field = "headline" | "sub" | "cta";

type EditableCtx = {
  editing: boolean;
  guides: boolean;
  accent: string;
  /** troca de assunto remonta os campos, reinjetando o texto do template */
  resetKey: string;
  onEdit: (field: Field, value: string) => void;
};

const NOOP_EDIT = () => {};

function Editable({
  value,
  field,
  ctx,
  as = "span",
  style,
  extra,
}: {
  value: string;
  field: Field;
  ctx: EditableCtx;
  as?: ElementType;
  style?: CSSProperties;
  extra?: CSSProperties;
}) {
  const Tag = as;
  if (!ctx.editing) {
    return <Tag style={{ ...style, ...extra }}>{value}</Tag>;
  }
  return (
    <EditableLive
      key={ctx.resetKey}
      value={value}
      field={field}
      ctx={ctx}
      as={as}
      style={style}
      extra={extra}
    />
  );
}

function EditableLive({
  value,
  field,
  ctx,
  as = "span",
  style,
  extra,
}: {
  value: string;
  field: Field;
  ctx: EditableCtx;
  as?: ElementType;
  style?: CSSProperties;
  extra?: CSSProperties;
}) {
  const Tag = as;
  const [focused, setFocused] = useState(false);

  // o texto só é injetado na montagem: enquanto a pessoa digita, o DOM manda.
  const valRef = useRef(value);
  valRef.current = value;
  const attach = useCallback((el: HTMLElement | null) => {
    if (el) el.innerText = valRef.current;
  }, []);

  const onInput = useCallback(
    (e: FormEvent<HTMLElement>) => {
      const el = e.currentTarget;
      ctx.onEdit(field, el.innerText);
    },
    [ctx, field],
  );

  return (
    <Tag
      ref={attach}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      role="textbox"
      aria-label={`Editar ${field}`}
      onInput={onInput}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...style,
        ...extra,
        outline: "none",
        borderRadius: 10,
        cursor: "text",
        transition: "box-shadow .15s ease, background .15s ease",
        ...(ctx.guides
          ? focused
            ? { boxShadow: `0 0 0 5px ${ctx.accent}`, background: `${ctx.accent}1f` }
            : { boxShadow: `0 0 0 2px ${ctx.accent}80` }
          : {}),
      }}
    />
  );
}

const FONT =
  "var(--font-geist-sans), system-ui, -apple-system, sans-serif";

function Ring({ size, color = "#ededed" }: { size: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle
        cx="16"
        cy="16"
        r="10"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="52 10"
        strokeLinecap="round"
        transform="rotate(-40 16 16)"
      />
    </svg>
  );
}

/** Marca: anel + wordmark "nohumans" (igual ao navbar). */
function Brand({
  size,
  color = "#ededed",
  wordSize,
}: {
  size: number;
  color?: string;
  wordSize?: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: size * 0.4,
        color,
      }}
    >
      <Ring size={size} color={color} />
      <span
        style={{
          fontSize: wordSize ?? size * 0.8,
          fontWeight: 500,
          letterSpacing: "-0.02em",
        }}
      >
        nohumans
      </span>
    </div>
  );
}

/** O card em si, renderizado em tamanho real (w × h). */
const CriativoCard = memo(function CriativoCard({
  layout,
  accent,
  headline,
  sub,
  cta,
  w,
  h,
  ctx,
}: {
  layout: LayoutId;
  accent: string;
  headline: string;
  sub: string;
  cta: string;
  w: number;
  h: number;
  ctx: EditableCtx;
}) {
  const isWide = w > h;
  const big = isWide ? 84 : 108;

  return (
    <div
      style={{
        width: w,
        height: h,
        background: "#000000",
        color: "#ededed",
        position: "relative",
        overflow: "hidden",
        fontFamily: FONT,
      }}
    >
      {/* glow neon */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 60% 50% at 50% 40%, ${accent}26, transparent 70%)`,
        }}
      />
      {/* grid sutil */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.14,
          backgroundImage:
            "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 80%)",
        }}
      />

      {layout === "centered" && (
        <CenteredLayout
          big={big}
          isWide={isWide}
          accent={accent}
          headline={headline}
          sub={sub}
          cta={cta}
          ctx={ctx}
        />
      )}
      {layout === "split" && (
        <SplitLayout
          big={big}
          isWide={isWide}
          accent={accent}
          headline={headline}
          sub={sub}
          cta={cta}
          ctx={ctx}
        />
      )}
      {layout === "price" && (
        <PriceLayout
          isWide={isWide}
          accent={accent}
          headline={headline}
          sub={sub}
          cta={cta}
          ctx={ctx}
        />
      )}
      {layout === "terminal" && (
        <TerminalLayout
          isWide={isWide}
          accent={accent}
          headline={headline}
          sub={sub}
          cta={cta}
          ctx={ctx}
        />
      )}
      {layout === "bento" && (
        <BentoLayout
          isWide={isWide}
          accent={accent}
          headline={headline}
          sub={sub}
          cta={cta}
          ctx={ctx}
        />
      )}
    </div>
  );
});

type LayoutProps = {
  isWide: boolean;
  accent: string;
  headline: string;
  sub: string;
  cta: string;
  ctx: EditableCtx;
};

function CenteredLayout({
  big,
  isWide,
  accent,
  headline,
  sub,
  cta,
  ctx,
}: LayoutProps & { big: number }) {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: isWide ? 96 : 110,
        gap: 52,
      }}
    >
      <Brand size={isWide ? 56 : 72} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 760,
        }}
      >
        <Editable
          as="h2"
          field="headline"
          value={headline}
          ctx={ctx}
          style={{
            fontSize: big,
            lineHeight: 1.02,
            fontWeight: 600,
            letterSpacing: "-0.045em",
            margin: 0,
          }}
        />
        <Editable
          as="p"
          field="sub"
          value={sub}
          ctx={ctx}
          style={{
            marginTop: 28,
            fontSize: isWide ? 30 : 34,
            lineHeight: 1.4,
            color: "#a1a1a1",
            maxWidth: 640,
          }}
        />
        <Pill accent={accent} cta={cta} big={isWide ? 26 : 30} ctx={ctx} />
      </div>
    </div>
  );
}

function SplitLayout({
  big,
  isWide,
  accent,
  headline,
  sub,
  cta,
  ctx,
}: LayoutProps & { big: number }) {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        display: "flex",
        flexDirection: isWide ? "row" : "column",
        alignItems: "center",
        justifyContent: isWide ? "space-between" : "center",
        padding: isWide ? 100 : 110,
        gap: 64,
      }}
    >
      <div
        style={{
          maxWidth: isWide ? 640 : 760,
          textAlign: isWide ? "left" : "center",
        }}
      >
        <Brand size={isWide ? 52 : 64} />
        <Editable
          as="h2"
          field="headline"
          value={headline}
          ctx={ctx}
          style={{
            marginTop: 44,
            fontSize: big,
            lineHeight: 1.02,
            fontWeight: 600,
            letterSpacing: "-0.045em",
          }}
        />
        <Editable
          as="p"
          field="sub"
          value={sub}
          ctx={ctx}
          style={{
            marginTop: 28,
            fontSize: isWide ? 30 : 34,
            lineHeight: 1.4,
            color: "#a1a1a1",
          }}
        />
        <div style={{ marginTop: 44 }}>
          <Pill accent={accent} cta={cta} big={isWide ? 26 : 30} ctx={ctx} />
        </div>
      </div>
      {/* anel gigante à direita */}
      <div style={{ flexShrink: 0 }}>
        <Ring size={isWide ? 260 : 210} color={accent} />
      </div>
    </div>
  );
}

function PriceLayout({
  isWide,
  accent,
  headline,
  sub,
  cta,
  ctx,
}: LayoutProps) {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        display: "flex",
        flexDirection: isWide ? "row" : "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isWide ? 100 : 110,
        gap: isWide ? 80 : 56,
        textAlign: isWide ? "left" : "center",
      }}
    >
      {/* preço gigante */}
      <div style={{ flexShrink: 0 }}>
        <Editable
          as="p"
          field="cta"
          value={cta}
          ctx={ctx}
          style={{
            margin: 0,
            fontSize: isWide ? 150 : 170,
            lineHeight: 1,
            fontWeight: 700,
            letterSpacing: "-0.05em",
            color: accent,
          }}
        />
      </div>
      <div style={{ maxWidth: isWide ? 520 : 700 }}>
        <Brand size={isWide ? 44 : 56} />
        <Editable
          as="h2"
          field="headline"
          value={headline}
          ctx={ctx}
          style={{
            marginTop: 36,
            fontSize: isWide ? 72 : 84,
            lineHeight: 1.05,
            fontWeight: 600,
            letterSpacing: "-0.04em",
          }}
        />
        <Editable
          as="p"
          field="sub"
          value={sub}
          ctx={ctx}
          style={{
            marginTop: 24,
            fontSize: isWide ? 28 : 32,
            lineHeight: 1.4,
            color: "#a1a1a1",
          }}
        />
      </div>
    </div>
  );
}

function TerminalLayout({
  isWide,
  accent,
  headline,
  sub,
  cta,
  ctx,
}: LayoutProps) {
  const mono = "var(--font-geist-mono), monospace";
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isWide ? 96 : 100,
        gap: 48,
      }}
    >
      <Brand size={isWide ? 52 : 64} />
      <div
        style={{
          width: "100%",
          maxWidth: isWide ? 900 : 820,
          borderRadius: 20,
          border: "1px solid #1f1f1f",
          background: "#0a0a0a",
          overflow: "hidden",
        }}
      >
        {/* header terminal */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "18px 24px",
            borderBottom: "1px solid #1f1f1f",
          }}
        >
          <span style={{ width: 12, height: 12, borderRadius: 999, background: "#ff5f57" }} />
          <span style={{ width: 12, height: 12, borderRadius: 999, background: "#febc2e" }} />
          <span style={{ width: 12, height: 12, borderRadius: 999, background: "#28c840" }} />
          <span style={{ marginLeft: 12, fontFamily: mono, fontSize: isWide ? 20 : 24, color: "#6f6f6f" }}>
            nohumans run
          </span>
        </div>
        {/* corpo */}
        <div style={{ padding: "36px 40px" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
            <span style={{ fontFamily: mono, fontSize: isWide ? 26 : 30, color: accent }}>$</span>
            <Editable
              as="span"
              field="headline"
              value={headline}
              ctx={ctx}
              style={{
                fontFamily: mono,
                fontSize: isWide ? 26 : 30,
                color: accent,
                textTransform: "lowercase",
              }}
            />
          </div>
          <Editable
            as="p"
            field="sub"
            value={sub}
            ctx={ctx}
            style={{
              margin: "20px 0 0",
              fontSize: isWide ? 30 : 34,
              lineHeight: 1.4,
              color: "#a1a1a1",
            }}
          />
          <div style={{ display: "flex", gap: 12, alignItems: "baseline", marginTop: 28 }}>
            <span style={{ fontFamily: mono, fontSize: isWide ? 26 : 30, color: "#ededed" }}>→</span>
            <Editable
              as="span"
              field="cta"
              value={cta}
              ctx={ctx}
              style={{
                fontFamily: mono,
                fontSize: isWide ? 26 : 30,
                color: "#ededed",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BentoLayout({
  isWide,
  accent,
  headline,
  sub,
  cta,
  ctx,
}: LayoutProps) {
  const cards = [
    { label: "Automação e IA", color: "#00e5ff" },
    { label: "Growth", color: "#ff2ec4" },
    { label: "Software e UX", color: "#a3ff12" },
  ];
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isWide ? 100 : 100,
        gap: 48,
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 760 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Brand size={isWide ? 52 : 64} />
        </div>
        <Editable
          as="h2"
          field="headline"
          value={headline}
          ctx={ctx}
          style={{
            marginTop: 40,
            fontSize: isWide ? 84 : 96,
            lineHeight: 1.02,
            fontWeight: 600,
            letterSpacing: "-0.045em",
          }}
        />
        <Editable
          as="p"
          field="sub"
          value={sub}
          ctx={ctx}
          style={{
            marginTop: 24,
            fontSize: isWide ? 28 : 32,
            lineHeight: 1.4,
            color: "#a1a1a1",
          }}
        />
      </div>
      {/* 3 cards das agências */}
      <div
        style={{
          display: "flex",
          flexDirection: isWide ? "row" : "column",
          gap: 16,
          width: "100%",
          maxWidth: 820,
        }}
      >
        {cards.map((c) => (
          <div
            key={c.label}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              borderRadius: 14,
              border: `1px solid ${c.color}44`,
              background: "#0a0a0a",
              padding: "20px 24px",
            }}
          >
            <span
              style={{
                fontSize: isWide ? 26 : 30,
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              {c.label}
            </span>
            <Ring size={isWide ? 36 : 44} color={c.color} />
          </div>
        ))}
      </div>
      <Pill accent={accent} cta={cta} big={isWide ? 24 : 28} ctx={ctx} />
    </div>
  );
}

function Pill({
  accent,
  cta,
  big,
  ctx,
}: {
  accent: string;
  cta: string;
  big: number;
  ctx: EditableCtx;
}) {
  return (
    <div
      style={{
        marginTop: 44,
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        borderRadius: 999,
        border: `1px solid ${accent}`,
        color: accent,
        padding: "14px 28px",
        fontSize: big,
        fontWeight: 500,
        letterSpacing: "-0.02em",
      }}
    >
      <Editable as="span" field="cta" value={cta} ctx={ctx} />
    </div>
  );
}

/* ============================================================
   Miniaturas: escolher olhando, não lendo
   ============================================================ */

const THUMB_CTX: EditableCtx = {
  editing: false,
  guides: false,
  accent: "#ededed",
  resetKey: "thumb",
  onEdit: NOOP_EDIT,
};

const AssuntoThumb = memo(function AssuntoThumb({
  assunto,
  layout,
  accent,
  w,
  h,
  thumbH,
  active,
  onPick,
}: {
  assunto: Assunto;
  layout: LayoutId;
  accent: string;
  w: number;
  h: number;
  thumbH: number;
  active: boolean;
  onPick: (a: Assunto) => void;
}) {
  const scale = thumbH / h;
  const boxW = Math.round(w * scale);
  return (
    <button
      type="button"
      onClick={() => onPick(assunto)}
      aria-pressed={active}
      title={`${assunto.label} — ${assunto.headline}`}
      className={`group flex shrink-0 flex-col gap-2 text-left transition-transform hover:-translate-y-0.5 ${
        active ? "" : "opacity-70 hover:opacity-100"
      }`}
      style={{ width: boxW }}
    >
      <span
        className={`block overflow-hidden rounded-lg border ${
          active ? "border-foreground" : "border-border"
        }`}
        style={{ width: boxW, height: thumbH }}
      >
        <span
          className="block"
          style={{
            width: w,
            height: h,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <CriativoCard
            layout={layout}
            accent={accent}
            headline={assunto.headline}
            sub={assunto.sub}
            cta={assunto.cta}
            w={w}
            h={h}
            ctx={THUMB_CTX}
          />
        </span>
      </span>
      <span
        className={`truncate font-mono text-[10px] uppercase tracking-widest ${
          active ? "text-muted" : "text-subtle"
        }`}
      >
        {assunto.label}
      </span>
    </button>
  );
});

const LayoutThumb = memo(function LayoutThumb({
  layout,
  label,
  accent,
  headline,
  sub,
  cta,
  w,
  h,
  thumbH,
  active,
  onPick,
}: {
  layout: LayoutId;
  label: string;
  accent: string;
  headline: string;
  sub: string;
  cta: string;
  w: number;
  h: number;
  thumbH: number;
  active: boolean;
  onPick: (id: LayoutId) => void;
}) {
  const scale = thumbH / h;
  const boxW = Math.round(w * scale);
  return (
    <button
      type="button"
      onClick={() => onPick(layout)}
      aria-pressed={active}
      title={label}
      className={`flex shrink-0 flex-col gap-2 text-left transition-transform hover:-translate-y-0.5 ${
        active ? "" : "opacity-70 hover:opacity-100"
      }`}
      style={{ width: boxW }}
    >
      <span
        className={`block overflow-hidden rounded-lg border ${
          active ? "border-foreground" : "border-border"
        }`}
        style={{ width: boxW, height: thumbH }}
      >
        <span
          className="block"
          style={{
            width: w,
            height: h,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <CriativoCard
            layout={layout}
            accent={accent}
            headline={headline}
            sub={sub}
            cta={cta}
            w={w}
            h={h}
            ctx={THUMB_CTX}
          />
        </span>
      </span>
      <span
        className={`truncate font-mono text-[10px] uppercase tracking-widest ${
          active ? "text-muted" : "text-subtle"
        }`}
      >
        {label}
      </span>
    </button>
  );
});

const nextPaint = () =>
  new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });

export function Criativos() {
  const cardRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const [format, setFormat] = useState(FORMATS[0]);
  const [layout, setLayout] = useState<LayoutId>("centered");
  const [assunto, setAssunto] = useState(ASSUNTOS[0]);
  const [accent, setAccent] = useState(ACCENTS[0]);
  const [headline, setHeadline] = useState(ASSUNTOS[0].headline);
  const [sub, setSub] = useState(ASSUNTOS[0].sub);
  const [cta, setCta] = useState(ASSUNTOS[0].cta);
  const [guias, setGuias] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  // começa pequeno de propósito: o primeiro paint nunca estoura a tela,
  // e o ResizeObserver ajusta pro tamanho real logo em seguida.
  const [boxW, setBoxW] = useState(280);
  const [maxH, setMaxH] = useState(560);

  /* preview ocupa o espaço que existe, sem estourar a altura da tela */
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setBoxW(el.clientWidth));
    ro.observe(el);
    setBoxW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const calc = () =>
      setMaxH(Math.max(340, Math.min(680, window.innerHeight * 0.66)));
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const prompt = useMemo(() => {
    return `Crie uma imagem/peça publicitária para a marca "nohumans" (agência de IA por assinatura), no estilo minimalista dark premium.

Identidade visual:
- Fundo preto puro (#000000).
- Brilho/glow suave neon na cor ${accent.name.toLowerCase()} (${accent.value}) — usado como destaque, nunca em excesso.
- Tipografia sans-serif geométrica, grande, com espaçamento negativo (tracking tight), em branco (#ededed).
- Elemento de marca: um anel aberto (círculo tracejado com um gap) + wordmark "nohumans".
- Muito espaço negativo, layout limpo, sem fotos de banco de imagens.

Texto principal (headline): "${headline}"
Texto secundário: "${sub}"
CTA/rodapé: "${cta}"

Formato: ${format.label} (${format.w}x${format.h}px).

Estética: tecnologia de alto padrão, vibe "Apple meets cyberpunk sutil", elegante e confiante. Sem texto em excesso, sem emojis.`;
  }, [accent, headline, sub, cta, format]);

  const selectAssunto = useCallback((a: Assunto) => {
    setAssunto(a);
    setHeadline(a.headline);
    setSub(a.sub);
    setCta(a.cta);
  }, []);

  const onEdit = useCallback((field: Field, value: string) => {
    if (field === "headline") setHeadline(value);
    else if (field === "sub") setSub(value);
    else setCta(value);
  }, []);

  const reset = useCallback(() => {
    setHeadline(assunto.headline);
    setSub(assunto.sub);
    setCta(assunto.cta);
  }, [assunto]);

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // fallback silencioso
    }
  };

  const download = async () => {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      // as guias de edição não podem sair na imagem
      setExporting(true);
      await nextPaint();
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 2,
        backgroundColor: "#000000",
        cacheBust: true,
      });
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `nohumans-${assunto.id}-${layout}-${format.id}.png`;
      a.click();
    } catch (err) {
      console.error("download error", err);
    } finally {
      setExporting(false);
      setDownloading(false);
    }
  };

  const editing = !exporting;
  const ctx = useMemo<EditableCtx>(
    () => ({
      editing,
      guides: guias && editing,
      accent: accent.value,
      resetKey: assunto.id,
      onEdit,
    }),
    [editing, guias, accent, assunto.id, onEdit],
  );

  /* a miniatura de layout acompanha o seu texto, então mostra o que você escreveu */
  const previewScale = Math.min(boxW / format.w, maxH / format.h);
  const previewW = Math.round(format.w * previewScale);
  const previewH = Math.round(format.h * previewScale);

  const stripH = 168;
  const layoutH = 132;

  return (
    <div className="py-16 sm:py-24">
      <div className="container flex flex-col gap-12">
        {/* ---------- escolher o assunto olhando ---------- */}
        <section>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
              Assunto
            </p>
            <p className="text-xs text-subtle">
              Clique na miniatura · edite o texto direto na peça
            </p>
          </div>
          <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
            {ASSUNTOS.map((a) => (
              <AssuntoThumb
                key={a.id}
                assunto={a}
                layout={layout}
                accent={accent.value}
                w={format.w}
                h={format.h}
                thumbH={stripH}
                active={assunto.id === a.id}
                onPick={selectAssunto}
              />
            ))}
          </div>
        </section>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* ---------- preview ---------- */}
          {/*
            min-w-0 é obrigatório: sem ele a coluna do grid cresce até caber o
            preview, a medição do ResizeObserver se realimenta e a página
            estoura a largura da tela.
          */}
          <div ref={boxRef} className="flex min-w-0 flex-col items-center">
            <span
              className="block overflow-hidden rounded-2xl border border-border shadow-2xl"
              style={{ width: previewW, height: previewH }}
            >
              <span
                className="block"
                style={{
                  width: format.w,
                  height: format.h,
                  transform: `scale(${previewScale})`,
                  transformOrigin: "top left",
                }}
              >
                <div
                  ref={cardRef}
                  style={{ width: format.w, height: format.h }}
                >
                  <CriativoCard
                    layout={layout}
                    accent={accent.value}
                    headline={headline}
                    sub={sub}
                    cta={cta}
                    w={format.w}
                    h={format.h}
                    ctx={ctx}
                  />
                </div>
              </span>
            </span>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={download}
                disabled={downloading}
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85 disabled:opacity-50"
              >
                <Download className="size-4" />
                {downloading ? "Gerando…" : "Baixar PNG"}
              </button>
              <button
                onClick={copyPrompt}
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface-hover"
              >
                {copied ? (
                  <Check className="size-4" />
                ) : (
                  <Copy className="size-4" />
                )}
                {copied ? "Prompt copiado" : "Copiar prompt"}
              </button>
              <button
                onClick={() => setGuias((v) => !v)}
                aria-pressed={guias}
                className={`inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors ${
                  guias
                    ? "border-border-strong text-foreground"
                    : "border-border text-subtle hover:bg-surface-hover"
                }`}
              >
                Guias de edição: {guias ? "ON" : "OFF"}
              </button>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-hover"
              >
                <RotateCcw className="size-4" />
                Restaurar texto
              </button>
            </div>
          </div>

          {/* ---------- controles ---------- */}
          <div className="flex min-w-0 flex-col gap-7">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                Formato
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {FORMATS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFormat(f)}
                    className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
                      format.id === f.id
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-muted hover:bg-surface-hover"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                Layout
              </p>
              <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
                {LAYOUTS.map((l) => (
                  <LayoutThumb
                    key={l.id}
                    layout={l.id}
                    label={l.label}
                    accent={accent.value}
                    headline={headline}
                    sub={sub}
                    cta={cta}
                    w={format.w}
                    h={format.h}
                    thumbH={layoutH}
                    active={layout === l.id}
                    onPick={setLayout}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                Cor de destaque
              </p>
              <div className="mt-3 flex gap-2">
                {ACCENTS.map((a) => (
                  <button
                    key={a.value}
                    onClick={() => setAccent(a)}
                    aria-label={a.name}
                    className={`flex size-9 items-center justify-center rounded-full border transition-transform hover:scale-105 ${
                      accent.value === a.value
                        ? "border-foreground"
                        : "border-border"
                    }`}
                    style={{ background: a.value }}
                  />
                ))}
              </div>
            </div>

            <details className="rounded-xl border border-border bg-surface p-5">
              <summary className="cursor-pointer text-sm font-medium">
                Ver prompt para IA
              </summary>
              <pre className="mt-4 whitespace-pre-wrap font-mono text-[12px] leading-relaxed text-muted">
                {prompt}
              </pre>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
