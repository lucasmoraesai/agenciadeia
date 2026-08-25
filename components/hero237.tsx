import React from "react";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";

import { cn } from "@/lib/utils";

interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}

interface HeroIntegrationsProps {
  className?: string;
  kicker?: string;
  heading: string;
  description: string;
  icons: Image[];
}

type Props = Partial<HeroIntegrationsProps>;

const defaultProps: HeroIntegrationsProps = {
  kicker: "Integrações",
  heading: "Conectamos suas ferramentas.",
  description:
    "CRM, ERP, WhatsApp e centenas de apps — a automação conversa com tudo, sem fricção.",
  icons: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/airtable-icon.svg",
      alt: "Airtable",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/claude-icon.svg",
      alt: "Claude",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/discord-icon.svg",
      alt: "Discord",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/drive-icon.svg",
      alt: "Google Drive",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/dropbox-icon.svg",
      alt: "Dropbox",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/facebook-icon.svg",
      alt: "Facebook",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/github-icon.svg",
      alt: "GitHub",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/gitlab-icon.svg",
      alt: "GitLab",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/google-icon.svg",
      alt: "Google",
    },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/jira-icon.svg", alt: "Jira" },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/notion-icon.svg",
      alt: "Notion",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/shadcn-ui-icon.svg",
      alt: "shadcn/ui",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/shopify-icon.svg",
      alt: "Shopify",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/sketch-icon.svg",
      alt: "Sketch",
    },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/slack-icon.svg", alt: "Slack" },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/spotify-icon.svg",
      alt: "Spotify",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/stripe-icon.svg",
      alt: "Stripe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/supabase-icon.svg",
      alt: "Supabase",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/vscode-icon.svg",
      alt: "VS Code",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/integrations/youtube-icon.svg",
      alt: "YouTube",
    },
  ],
};

const Hero237 = (props: Props) => {
  const { className, kicker, heading, description, icons } = {
    ...defaultProps,
    ...props,
  };
  const urls = icons.map((l) => l.src);
  const circle1Images = urls.slice(0, 5);
  const circle2Images = urls.slice(5, 9);
  const circle3Images = urls.slice(9, 14);
  const circle4Images = urls.slice(14, 21);

  return (
    <section
      className={cn(
        "relative overflow-hidden border border-b py-32",
        className,
      )}
    >
      <div className="relative container flex flex-col lg:flex-row">
        <div className="mt-10 space-y-12 lg:w-1/2">
          {kicker && (
            <p className="w-fit rounded-full bg-muted px-4 py-1 text-sm uppercase">
              {kicker}
            </p>
          )}
          <h1 className="font-calSans mt-3 max-w-lg text-6xl font-medium lg:text-7xl">
            {heading}
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="relative h-112 lg:w-1/2">
          <div className="relative -left-35 flex h-[1100px] w-[1500px] flex-col items-center justify-center lg:absolute lg:left-0">
            <OrbitingCircles iconSize={40} radius={310} speed={2}>
              {circle1Images.map((src, index) => (
                <div key={index} className="size-12">
                  <img src={src} className="size-full object-contain" alt="" />
                </div>
              ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={40} radius={390} reverse speed={2}>
              {circle2Images.map((src, index) => (
                <div key={index} className="size-12">
                  <img src={src} className="size-full object-contain" alt="" />
                </div>
              ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={40} radius={470} speed={2}>
              {circle3Images.map((src, index) => (
                <div key={index} className="size-12">
                  <img src={src} className="size-full object-contain" alt="" />
                </div>
              ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={40} radius={550} reverse speed={1}>
              {circle4Images.map((src, index) => (
                <div key={index} className="size-12">
                  <img src={src} className="size-full object-contain" alt="" />
                </div>
              ))}
            </OrbitingCircles>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero237 };
