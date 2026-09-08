import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement>;

/**
 * Logos das 3 agências — no estilo do logo nohumans (anel aberto tracejado),
 * cada um com uma cor neon e um símbolo central minimalista.
 */

/** Agência de Automação e IA — ciano neon, nó de rede. */
export function AutomacaoIalogo(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      {...props}
    >
      {/* anel aberto (estilo nohumans) */}
      <circle
        cx="16"
        cy="16"
        r="13"
        stroke="#00e5ff"
        strokeWidth="1.5"
        strokeDasharray="62 16"
        strokeLinecap="round"
        transform="rotate(-40 16 16)"
      />
      {/* nó de rede central */}
      <path
        d="M16 9v14M9 16h14"
        stroke="#00e5ff"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="16" cy="9" r="2" fill="#00e5ff" />
      <circle cx="16" cy="23" r="2" fill="#00e5ff" />
      <circle cx="9" cy="16" r="2" fill="#00e5ff" />
      <circle cx="23" cy="16" r="2" fill="#00e5ff" />
    </svg>
  );
}

/** Agência de Marketing / Growth — magenta neon, seta ascendente. */
export function GrowthLogo(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      {...props}
    >
      {/* anel aberto */}
      <circle
        cx="16"
        cy="16"
        r="13"
        stroke="#ff2ec4"
        strokeWidth="1.5"
        strokeDasharray="62 16"
        strokeLinecap="round"
        transform="rotate(-40 16 16)"
      />
      {/* seta ascendente */}
      <path
        d="M10 21l6-7 6 7"
        stroke="#ff2ec4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 14v5"
        stroke="#ff2ec4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="26" cy="7" r="1.6" fill="#ff2ec4" opacity="0.9" />
    </svg>
  );
}

/** Agência de Software e UX — lima neon, chevrons de código. */
export function SoftwareUxLogo(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      {...props}
    >
      {/* anel aberto */}
      <circle
        cx="16"
        cy="16"
        r="13"
        stroke="#a3ff12"
        strokeWidth="1.5"
        strokeDasharray="62 16"
        strokeLinecap="round"
        transform="rotate(-40 16 16)"
      />
      {/* chevrons de código */}
      <path
        d="M11 12l-4 4 4 4"
        stroke="#a3ff12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12l4 4-4 4"
        stroke="#a3ff12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 11l-2 10"
        stroke="#a3ff12"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
