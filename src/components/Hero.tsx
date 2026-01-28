import { ArrowRight, Check } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { Lane, Stat } from '../content/siteContent';

type HeroProps = {
  highlights: string[];
  lanes: Lane[];
  stats: Stat[];
  otifDisplay: string;
  formatEta: (days: number) => string;
  formatStatValue: (stat: Stat) => string;
};

export function Hero({
  highlights,
  lanes,
  stats,
  otifDisplay,
  formatEta,
  formatStatValue,
}: HeroProps) {
  const heroBackdropStyle = {
    '--hero-img-1': `url(${import.meta.env.BASE_URL}images/mangos_1.jpeg)`,
    '--hero-img-2': `url(${import.meta.env.BASE_URL}images/mangos_4.jpeg)`,
    '--hero-img-3': `url(${import.meta.env.BASE_URL}images/tomates.jpeg)`,
  } as CSSProperties;

  return (
    <section className="hero-aurora hero-showcase min-h-[90vh] pt-32" style={heroBackdropStyle}>
      <div className="hero-media" aria-hidden="true">
        <span className="hero-media-layer hero-media-one" />
        <span className="hero-media-layer hero-media-two" />
        <span className="hero-media-layer hero-media-three" />
      </div>
      <div className="container mx-auto px-6 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8 reveal" style={{ animationDelay: '0.1s' }}>
            <span className="badge">Export Intelligence</span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                Exportaciones <span className="text-gradient">Sin Fricción</span> y Con Trazabilidad Total.
              </h1>
              <p className="text-lg text-muted md:text-xl">
                GlobalLift coordina logística marítima y aérea, compliance aduanero y consultoría estratégica
                para que tu carga llegue a tiempo y con un solo punto de control.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn btn-primary">
                Solicitar Consultoría
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#services" className="btn btn-ghost">
                Ver Servicios
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-signal" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 reveal" style={{ animationDelay: '0.2s' }}>
            <div className="panel p-6">
              <div className="flex items-center justify-between text-sm">
                <span className="badge">Live Lanes</span>
                <span className="text-signal tabular-nums">OTIF {otifDisplay}</span>
              </div>
              <div className="mt-6 space-y-4">
                {lanes.map((lane) => (
                  <div
                    key={lane.route}
                    className="flex items-center justify-between rounded-xl border border-slate/60 bg-white/80 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-mist break-words">{lane.route}</p>
                      <p className="text-xs text-muted">ETA {formatEta(lane.etaDays)}</p>
                    </div>
                    <span className="text-xs text-signal">{lane.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="panel-solid p-5">
                  <p className="text-2xl font-semibold text-mist tabular-nums">
                    {formatStatValue(stat)}
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
