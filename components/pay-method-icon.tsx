import type { ReactNode } from "react";
import type { PayMethod } from "@/lib/payments";

function IconFrame({
  children,
  className,
  fill = false,
}: {
  children: ReactNode;
  className?: string;
  fill?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill ? "currentColor" : "none"}
      stroke={fill ? "none" : "currentColor"}
      strokeWidth={fill ? undefined : 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

function PixIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className} fill>
      <path d="M16.3 3.7c-.4-.4-1-.4-1.4 0l-2.6 2.6c-.2.2-.2.5 0 .7l2.6 2.6c.4.4 1 .4 1.4 0l2.6-2.6c.2-.2.2-.5 0-.7l-2.6-2.6ZM7.7 3.7c-.4-.4-1-.4-1.4 0L3.7 6.3c-.2.2-.2.5 0 .7l2.6 2.6c.4.4 1 .4 1.4 0l2.6-2.6c.2-.2.2-.5 0-.7L7.7 3.7ZM16.3 14.3c-.4-.4-1-.4-1.4 0l-2.6 2.6c-.2.2-.2.5 0 .7l2.6 2.6c.4.4 1 .4 1.4 0l2.6-2.6c.2-.2.2-.5 0-.7l-2.6-2.6ZM7.7 14.3c-.4-.4-1-.4-1.4 0l-2.6 2.6c-.2.2-.2.5 0 .7l2.6 2.6c.4.4 1 .4 1.4 0l2.6-2.6c.2-.2.2-.5 0-.7l-2.6-2.6ZM13.1 10.2 12 9.1l-1.1 1.1-1.1-1.1L8.7 10.2l1.1 1.1-1.1 1.1 1.1 1.1L12 12.4l1.1 1.1 1.1-1.1-1.1-1.1 1.1-1.1-1.1-1.1Z" />
    </IconFrame>
  );
}

function BtcIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className}>
      <circle cx="12" cy="12" r="9.25" />
      <path d="M10 7v10M13.25 7v10M9.25 9.25h3.4c1.15 0 1.95.6 1.95 1.55S13.8 12.3 12.65 12.3H9.25M9.25 12.3h3.6c1.2 0 2 .6 2 1.6s-.85 1.55-2.1 1.55H9.25" />
    </IconFrame>
  );
}

function EthIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className}>
      <path d="M12 3 6 12.25 12 15.5 18 12.25 12 3Z" />
      <path d="m6 13.4 6 7.6 6-7.6-6 3.25L6 13.4Z" />
    </IconFrame>
  );
}

export function PayMethodIcon({
  method,
  className = "h-5 w-5",
}: {
  method: PayMethod;
  className?: string;
}) {
  if (method === "pix") return <PixIcon className={className} />;
  if (method === "btc") return <BtcIcon className={className} />;
  return <EthIcon className={className} />;
}
