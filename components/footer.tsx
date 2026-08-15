import { SITE_NAME, SITE_URL } from "@/lib/config";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-wrap items-center justify-between gap-3">
        <p className="kicker text-subtle">{SITE_NAME}</p>
        <p className="kicker text-subtle">
          <a href={SITE_URL} className="fade-hover">
            agenciadeia.tech
          </a>
          <span className="mx-2">·</span>
          {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
}
