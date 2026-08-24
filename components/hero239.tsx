import { ArrowRight } from "lucide-react";

import { Container } from "./container";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { cn } from "@/lib/utils";
import { whatsappHref } from "@/lib/whatsapp";

interface Hero239Props {
  className?: string;
}

const Hero239 = ({ className }: Hero239Props) => {
  const images = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img10.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img12.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img13.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img14.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img15.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img16.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img17.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img18.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img19.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img20.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img21.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img22.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img23.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img24.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img25.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img26.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img27.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img9.jpeg",
  ];

  return (
    <section
      className={cn("relative overflow-hidden border-b border-border py-24 sm:py-28", className)}
    >
      <Container className="flex flex-col items-center justify-center gap-5 text-center">
        <p className="w-fit rounded-full border border-border bg-surface px-4 py-1 font-mono text-[11px] uppercase tracking-widest text-subtle">
          Agência de UX
        </p>
        <h1 className="tracking-tighter-display mt-3 max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-7xl lg:text-[84px]">
          Agência de UX/UI
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Do rabisco ao produto final — design, protótipo e pesquisa, tudo em um
          só lugar.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#planos"
            className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Ver planos
          </a>
          <a
            href={whatsappHref("Quero uma agência de UX para o meu produto.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-hover"
          >
            Falar no WhatsApp <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="mt-12 flex h-full w-full items-center justify-center">
          <ThreeDMarquee images={images} />
        </div>
      </Container>
    </section>
  );
};

export { Hero239 };
