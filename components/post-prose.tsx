import Link from "next/link";
import type { ReactNode } from "react";
import GithubSlugger from "github-slugger";

const slugger = new GithubSlugger();

export function slugify(text: string): string {
  slugger.reset();
  return slugger.slug(text);
}

export function PostProse({ children }: { children: ReactNode }) {
  return (
    <div className="[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:sm:text-3xl [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_p]:my-5 [&_p]:leading-[1.85] [&_p]:text-[15px] [&_p]:text-muted [&_ul]:my-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-[15px] [&_ul]:text-muted [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:text-[15px] [&_ol]:text-muted [&_li]:leading-[1.8] [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-subtle [&_a:hover]:decoration-foreground [&_strong]:font-semibold [&_strong]:text-foreground [&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-border-strong [&_blockquote]:pl-5 [&_blockquote]:text-lg [&_blockquote]:italic [&_blockquote]:text-muted [&_code]:rounded [&_code]:bg-surface [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[13px] [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-border [&_pre]:bg-surface [&_pre]:p-5 [&_pre]:font-mono [&_pre]:text-[13px] [&_pre]:leading-relaxed [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_hr]:my-10 [&_hr]:border-border [&_table]:my-8 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_th]:border [&_th]:border-border [&_th]:bg-surface [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-medium [&_td]:border [&_td]:border-border [&_td]:px-4 [&_td]:py-2 [&_td]:text-muted]">
      {children}
    </div>
  );
}

export function Toc({ content }: { content: string }) {
  const headings = content
    .split("\n")
    .filter((l) => /^##\s/.test(l))
    .map((l) => l.replace(/^##\s+/, "").trim());

  if (headings.length === 0) return null;

  return (
    <nav className="rounded-xl border border-border bg-surface/60 p-5">
      <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
        Neste artigo
      </p>
      <ul className="mt-3 flex flex-col gap-1.5">
        {headings.map((h) => (
          <li key={h}>
            <Link
              href={`#${slugify(h)}`}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {h}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

