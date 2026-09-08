import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { PostProse, Toc } from "@/components/post-prose";
import {
  getAllPosts,
  getAllSlugs,
  getPostBySlug,
  type Post,
} from "@/lib/blog";
import { faqSchema } from "@/lib/seo";

const SITE_URL = "https://agenciadeia.tech";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}/`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "nohumans",
      locale: "pt_BR",
      type: "article",
      images: [{ url: post.cover, width: 1200, height: 630, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.cover],
    },
  };
}

function articleSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.cover,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "pt-BR",
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}/`,
    keywords: post.tags.join(", "),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      {post.faq && post.faq.length > 0 && <JsonLd data={faqSchema(post.faq)} />}

      <Container className="pt-24 sm:pt-28">
        <Link
          href="/blog/"
          className="inline-flex items-center gap-1.5 text-sm text-subtle transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Voltar ao blog
        </Link>
        <div className="mx-auto mt-6 max-w-3xl">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-subtle"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="tracking-tighter-display mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 font-mono text-[12px] text-subtle">
            {post.date} · nohumans
          </p>
        </div>
      </Container>

      <Container className="pt-8 pb-24">
        <div className="mx-auto grid max-w-3xl gap-10 lg:max-w-5xl lg:grid-cols-[1fr_240px]">
          <article>
            <div className="mb-10 aspect-[16/9] overflow-hidden rounded-xl border border-border bg-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.cover}
                alt={post.coverAlt}
                className="h-full w-full object-cover"
              />
            </div>
            <PostProse>
              <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug]}
              >
                {post.content}
              </Markdown>
            </PostProse>
          </article>
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <Toc content={post.content} />
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
