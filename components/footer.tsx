import { SITE_NAME } from "@/lib/config";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="py-8">
      <Container className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-subtle">{SITE_NAME}</p>
        <p className="font-mono text-[11px] text-subtle">
          agenciadeia.tech · {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
}
