"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const images = [
  { id: 1, src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random5.jpeg", title: "Automação CRM", code: "#01" },
  { id: 2, src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg", title: "Chatbot WhatsApp", code: "#02" },
  { id: 3, src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random13.jpeg", title: "Landing Page", code: "#03" },
  { id: 4, src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg", title: "Dashboard Financeiro", code: "#04" },
  { id: 5, src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random2.jpeg", title: "Agente Atendimento", code: "#05" },
  { id: 6, src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random8.jpeg", title: "Automação Vendas", code: "#06" },
  { id: 7, src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random9.jpeg", title: "Integração ERP", code: "#07" },
  { id: 8, src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random10.jpeg", title: "Relatório Automático", code: "#08" },
];

interface Gallery24Props {
  className?: string;
}

const Gallery24 = ({ className }: Gallery24Props) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);

  return (
    <section className={cn("py-32", className)}>
      <div className="relative container overflow-x-clip">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-playfair max-w-xl text-center text-5xl tracking-tighter italic md:text-6xl">
            A gente entrega resultado.
          </h1>
          <p className="text-md my-10 max-w-lg text-center opacity-50">
            Automação, software e marketing já rodando no piloto automático.
          </p>

          <div className="flex w-full items-center justify-center gap-1">
            {images
              .slice(0, useIsMobile() ? 4 : images.length)
              .map((image, index) => (
                <motion.div
                  key={image.id}
                  className="relative cursor-pointer overflow-hidden rounded-3xl border"
                  initial={{ width: "2.5rem", height: "20rem" }}
                  animate={{
                    width: activeImage === index ? "24rem" : "5rem",
                    height: activeImage === index ? "24rem" : "24rem",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onClick={() => setActiveImage(index)}
                  onHoverStart={() => setActiveImage(index)}
                >
                  <AnimatePresence>
                    {activeImage === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute h-full w-full bg-gradient-to-t from-black/80 to-transparent"
                      />
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {activeImage === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute flex h-full w-full flex-col items-end justify-end px-4 pb-10"
                      >
                        <p className="text-left text-xs text-white/50">
                          {image.code}
                        </p>
                        <h3 className="w-42 text-right text-3xl font-bold text-white lg:w-fit lg:whitespace-nowrap">
                          {image.title.split(" ")[0]}
                          <span className="font-playfair italic">
                            {" "}
                            {image.title.split(" ")[1]}{" "}
                          </span>
                        </h3>
                        <button className="mt-2 flex w-32 items-center justify-center gap-2 rounded-full bg-background px-4 py-2 text-xs whitespace-nowrap">
                          Ver entrega <ArrowRight size={14} />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <img
                    src={image.src}
                    className="size-full object-cover"
                    alt={image.title}
                  />
                </motion.div>
              ))}
          </div>
          <Button asChild className="group mt-10 flex w-fit items-center justify-center gap-2 rounded-full tracking-tight">
            <a href="#planos">
              Ver planos
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:rotate-0" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Gallery24 };
