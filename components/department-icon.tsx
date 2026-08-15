import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function IconFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

const ICONS: Record<string, (props: IconProps) => ReactNode> = {
  marketing: (props) => (
    <IconFrame {...props}>
      <path d="M3 11v2a1 1 0 0 0 1 1h2.2L14 19V5L6.2 10H4a1 1 0 0 0-1 1Z" />
      <path d="M17.5 8.5a4.2 4.2 0 0 1 0 7" />
    </IconFrame>
  ),
  vendas: (props) => (
    <IconFrame {...props}>
      <path d="M4 19V9" />
      <path d="M10 19V5" />
      <path d="M16 19v-7" />
      <path d="M22 19V8" />
    </IconFrame>
  ),
  atendimento: (props) => (
    <IconFrame {...props}>
      <path d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-1.5" />
      <path d="M4 12v5a2 2 0 0 0 2 2h1.5" />
      <path d="M8 21h8" />
    </IconFrame>
  ),
  financeiro: (props) => (
    <IconFrame {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h2" />
    </IconFrame>
  ),
  operacoes: (props) => (
    <IconFrame {...props}>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <path d="M8 6h8M7.5 8l3.2 8M16.5 8l-3.2 8" />
    </IconFrame>
  ),
  rh: (props) => (
    <IconFrame {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.2" />
      <path d="M21.5 19a4.5 4.5 0 0 0-6-4.1" />
    </IconFrame>
  ),
  produto: (props) => (
    <IconFrame {...props}>
      <path d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3Z" />
      <path d="M12 12 20 7.5M12 12v9M12 12 4 7.5" />
    </IconFrame>
  ),
  tecnologia: (props) => (
    <IconFrame {...props}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M9 9h.01M12 9h.01M15 9h.01M9 13h6" />
    </IconFrame>
  ),
  juridico: (props) => (
    <IconFrame {...props}>
      <path d="M12 3v3" />
      <path d="M5 10h14" />
      <path d="M7 10 4 20h4l1.5-4h5L16 20h4L17 10" />
      <path d="M12 6 6 10h12L12 6Z" />
    </IconFrame>
  ),
  dados: (props) => (
    <IconFrame {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
      <path d="M5 10v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
      <path d="M5 14v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
    </IconFrame>
  ),
  compras: (props) => (
    <IconFrame {...props}>
      <path d="M6 7h15l-1.4 8.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.6L5.2 4H3" />
      <circle cx="9" cy="20" r="1.2" />
      <circle cx="18" cy="20" r="1.2" />
    </IconFrame>
  ),
  sucesso: (props) => (
    <IconFrame {...props}>
      <path d="M12 21s-7-4.4-7-10a4.5 4.5 0 0 1 7-3.7A4.5 4.5 0 0 1 19 11c0 5.6-7 10-7 10Z" />
    </IconFrame>
  ),
};

export function DepartmentIcon({ id, className }: { id: string; className?: string }) {
  const Icon = ICONS[id];
  if (!Icon) return null;
  return <>{Icon({ className })}</>;
}
