import { ArrowRight, Check } from 'lucide-react';
import type { CSSProperties } from 'react';

type HeroProps = {
  highlights: string[];
};

export function Hero({
  highlights,
}: HeroProps) {
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
          <div className="hero-copy max-w-2xl mx-auto space-y-8 reveal text-center" style={{ animationDelay: '0.1s' }}>
            <span className="badge mx-auto">Export Intelligence</span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                Exportaciones <span className="text-gradient">Sin Fricción</span> y Con Trazabilidad Total.
              </h1>
              <p className="text-lg text-muted md:text-xl">
                GlobalLift coordina logística marítima y aérea, compliance aduanero y consultoría estratégica
                para que tu carga llegue a tiempo y con un solo punto de control.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <a href="#contact" className="btn btn-primary">
                Solicitar Consultoría
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#services" className="btn btn-ghost">
                Ver Servicios
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted justify-center">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-signal" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
