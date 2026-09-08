import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/container";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "Blog — IA, automação e growth para empresas",
  description:
    "Artigos sobre automação de processos, agentes de IA, marketing com IA e software para PMEs brasileiras. Conteúdo prático para automatizar sua empresa.",
  path: "/blog/",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog nohumans",
          url: "https://agenciadeia.tech/blog/",
          inLanguage: "pt-BR",
          publisher: { "@id": "https://agenciadeia.tech/#organization" },
        }}
      />
      <Container className="pt-24 sm:pt-28">
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Blog
        </p>
        <h1 className="tracking-tighter-display mt-3 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl">
          IA, automação e growth — explicados pra você aplicar.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Guias práticos para PMEs que querem automatizar operação, vender mais
          e cortar custo com IA. Sem enrolação.
        </p>
      </Container>

      <Container className="pt-10 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:bg-surface-hover"
            >
              <div className="aspect-[16/9] overflow-hidden bg-background">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.cover}
                  alt={post.coverAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-subtle"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 text-lg font-semibold tracking-tight group-hover:underline group-hover:underline-offset-4">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-muted">
                  {post.description}
                </p>
                <p className="mt-auto pt-5 font-mono text-[11px] text-subtle">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
