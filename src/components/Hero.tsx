import { ArrowRight, Check } from 'lucide-react';
import type { ReactNode } from 'react';
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
  return (
    <section className="hero-aurora section min-h-[88vh] pt-28 pb-16 flex items-center">
      <div className="container">
        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="hero-copy space-y-7 reveal" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl font-display">
                {highlightTitle(copy.title)}
              </h1>
              <p className="text-lg text-muted md:text-xl">{copy.subtitle}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn btn-primary">
                {copy.primaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#services" className="btn btn-outline">
                {copy.secondaryCta}
              </a>
            </div>
            <p className="text-sm text-muted md:text-base">{copy.micro}</p>
            <div className="flex flex-wrap gap-3">
              {copy.trustCues.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="panel-solid p-7 shadow-lift reveal" style={{ animationDelay: '0.25s' }}>
            <div className="flex items-center gap-3">
              <span className="icon-dot">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold text-mist">{copy.secondaryCta}</p>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {copy.slogans.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
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
