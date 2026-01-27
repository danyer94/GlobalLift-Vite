import { ArrowRight, Check } from 'lucide-react';
import type { Service } from '../content/siteContent';

type ServicesProps = {
  services: Service[];
  differentiators: string[];
};

export function Services({ services, differentiators }: ServicesProps) {
  return (
    <section id="services" className="bg-ink py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr] lg:items-end">
          <div>
            <p className="badge">Servicios</p>
            <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
              Operación Diseñada para Exportadores que Exigen Precisión.
            </h2>
          </div>
          <p className="text-lg text-muted">
            Recibes logística, compliance y análisis operativo para reducir tiempos, riesgos y costos ocultos en
            la cadena de exportación.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="card">
                <Icon className="h-10 w-10 text-signal" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-semibold text-mist break-words">{service.title}</h3>
                <p className="mt-3 text-sm text-muted break-words">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-signal transition-colors hover:text-signal/80"
                >
                  Explorar Servicio
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            );
          })}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item} className="panel-solid p-5 text-sm text-muted">
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 text-signal" aria-hidden="true" />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
