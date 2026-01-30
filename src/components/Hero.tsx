import { ArrowRight } from 'lucide-react';
import type { CSSProperties, ReactNode } from 'react';
import type { HeroCopy } from '../content/siteContent';

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
  const heroBackdropStyle = {
    '--hero-img-1': `url(${import.meta.env.BASE_URL}images/mangos_1.jpeg)`,
    '--hero-img-2': `url(${import.meta.env.BASE_URL}images/mangos_4.jpeg)`,
    '--hero-img-3': `url(${import.meta.env.BASE_URL}images/tomates.jpeg)`,
  } as CSSProperties;

  return (
    <section className="hero-aurora hero-showcase min-h-[90vh] pt-32 flex items-center justify-center" style={heroBackdropStyle}>
      <div className="hero-media absolute inset-0" aria-hidden="true">
        <span className="hero-media-layer hero-media-one" />
        <span className="hero-media-layer hero-media-two" />
        <span className="hero-media-layer hero-media-three" />
      </div>
      <div className="relative z-10 flex w-full">
        <div className="container mx-auto px-6 pb-20 flex flex-col items-center justify-center w-full">
          <div className="hero-copy max-w-3xl mx-auto space-y-8 reveal text-center" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{highlightTitle(copy.title)}</h1>
              <p className="text-lg text-muted md:text-xl">{copy.subtitle}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <a href="#contact" className="btn btn-primary">
                {copy.primaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#services" className="btn btn-ghost">
                {copy.secondaryCta}
              </a>
            </div>
            <p className="text-sm text-muted md:text-base">{copy.micro}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {copy.slogans.map((item) => (
                <span key={item} className="rounded-full border border-slate/60 bg-white/70 px-4 py-1.5 text-xs text-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

