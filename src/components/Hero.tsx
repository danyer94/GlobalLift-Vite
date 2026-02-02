import { ArrowRight, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { HeroCopy } from '../content/siteContent';

const heroBaseUrl = import.meta.env.BASE_URL;
const HERO_BG_IMAGES = ['images/aguacates.jpeg', 'images/mangos_1.jpeg', 'images/verdura.jpeg'].map(
  (path) => `${heroBaseUrl}${path}`,
);
const BG_ROTATE_INTERVAL_MS = 10_000;

type HeroProps = {
  copy: HeroCopy;
};

const highlightTitle = (title: string): ReactNode => {
  const markers = ['República Dominicana', 'Dominican Republic'];
  const marker = markers.find((item) => title.includes(item));

  if (!marker) {
    return title;
  }

  const index = title.indexOf(marker);

  return (
    <>
      {title.slice(0, index)}
      <span className="text-gradient">{marker}</span>
      {title.slice(index + marker.length)}
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
    <section className="hero-aurora section min-h-[88vh] pt-28 pb-16 flex items-center">
      <div className="hero-bg-slides" aria-hidden="true">
        {HERO_BG_IMAGES.map((src, i) => (
          <div
            key={src}
            className="hero-bg-slide"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === bgIndex ? 1 : 0,
            }}
          />
        ))}
      </div>
      <div className="container">
        <div className="grid w-full gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div className="hero-copy space-y-7 text-center lg:text-left reveal" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl font-display">
                {highlightTitle(copy.title)}
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">{copy.subtitle}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#contact" className="btn btn-primary">
                {copy.primaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#services" className="btn btn-outline">
                {copy.secondaryCta}
              </a>
            </div>
            <p className="text-sm text-muted-foreground md:text-base">{copy.micro}</p>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              {copy.trustCues.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="panel-solid w-full max-w-2xl p-7 shadow-lift reveal" style={{ animationDelay: '0.25s' }}>
            <div className="flex items-center gap-3">
              <span className="icon-dot">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold text-foreground">{copy.secondaryCta}</p>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {copy.slogans.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge">{copy.primaryCta}</span>
              <span className="pill">{copy.micro}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
