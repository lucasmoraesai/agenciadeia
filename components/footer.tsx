import { SITE_NAME, SITE_URL } from "@/lib/config";

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8">
      <p className="mono text-[11px] uppercase tracking-[0.16em] text-muted">
        {SITE_NAME}
      </p>
      <p className="mono text-[11px] text-muted">
        <a href={SITE_URL} className="fade-hover">
          agenciadeia.tech
        </a>
        <span className="mx-2">·</span>
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
