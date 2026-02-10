import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import type { HeroCopy } from '../content/siteContent';
import { MotionSection } from './MotionSection';

const heroBaseUrl = import.meta.env.BASE_URL;
const HERO_BG_IMAGES = [
  {
    src: `${heroBaseUrl}images/generated/hero-cinematic-port.webp`,
    posMobile: 'center 40%',
    posTablet: 'center 38%',
    posDesktop: 'center 36%',
  },
  {
    src: `${heroBaseUrl}images/generated/services-multimodal.webp`,
    posMobile: 'center 44%',
    posTablet: 'center 42%',
    posDesktop: 'center 40%',
  },
  {
    src: `${heroBaseUrl}images/generated/commitment-ship-sunset.webp`,
    posMobile: 'center 46%',
    posTablet: 'center 44%',
    posDesktop: 'center 42%',
  },
];
const BG_ROTATE_INTERVAL_MS = 6_000;

type HeroProps = {
  copy: HeroCopy;
};

const highlightTitle = (title: string): ReactNode => {
  const markers = [
    { text: 'sin fronteras', className: 'text-gradient' },
    { text: 'without borders', className: 'text-gradient' },
    { text: 'República Dominicana', className: 'text-gradient' },
    { text: 'Dominican Republic', className: 'text-gradient' },
  ];
  const marker = markers.find((item) => title.includes(item.text));

  if (!marker) {
    return title;
  }

  const index = title.indexOf(marker.text);

  return (
    <>
      {title.slice(0, index)}
      <span className={marker.className}>{marker.text}</span>
      {title.slice(index + marker.text.length)}
    </>
  );
};

export function Hero({ copy }: HeroProps) {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((i) => (i + 1) % HERO_BG_IMAGES.length);
    }, BG_ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <MotionSection
      className="hero-aurora section min-h-[88vh] pt-28 pb-16 flex items-center justify-center"
      decorVariant="aurora"
      parallaxStrength={24}
      background={
        <div className="hero-bg-slides" aria-hidden="true">
          {HERO_BG_IMAGES.map((image, i) => {
            const slideStyle = {
              opacity: i === bgIndex ? 1 : 0,
              '--hero-pos-mobile': image.posMobile,
              '--hero-pos-tablet': image.posTablet,
              '--hero-pos-desktop': image.posDesktop,
            } as CSSProperties;

            return (
              <img
                key={image.src}
                src={image.src}
                alt=""
                className="hero-bg-image"
                style={slideStyle}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                width={1536}
                height={1024}
                sizes="100vw"
              />
            );
          })}
        </div>
      }
    >
      <div className="container flex justify-center">
        <div className="hero-copy w-full max-w-3xl space-y-7 text-center">
          <div className="space-y-5">
            <h1 className="hero-slogan hero-slogan--archivo text-4xl tracking-tight md:text-6xl">
              {highlightTitle(copy.title)}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">{copy.subtitle}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <a href="#contact" className="btn btn-primary">
              {copy.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#services" className="btn btn-outline">
              {copy.secondaryCta}
            </a>
          </div>
          <p className="text-sm text-muted-foreground md:text-base">{copy.micro}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {copy.trustCues.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
