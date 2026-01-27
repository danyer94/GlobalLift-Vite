import { MapPin } from 'lucide-react';
import type { Location } from '../content/siteContent';

type NetworkProps = {
  locations: Location[];
};

export function Network({ locations }: NetworkProps) {
  return (
    <section id="network" className="bg-graphite py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="panel map-frame h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              alt="Mapa global con rutas de exportación"
              className="h-full w-full object-cover opacity-60"
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
            />
            <div className="route-lines" aria-hidden="true"></div>
            <div className="map-dot" style={{ top: '30%', left: '22%' }} aria-hidden="true"></div>
            <div className="map-dot" style={{ top: '24%', left: '48%' }} aria-hidden="true"></div>
            <div className="map-dot" style={{ top: '44%', left: '52%' }} aria-hidden="true"></div>
            <div className="map-dot" style={{ top: '40%', left: '70%' }} aria-hidden="true"></div>
            <div className="map-dot" style={{ top: '62%', left: '82%' }} aria-hidden="true"></div>
          </div>
          <div className="space-y-6">
            <p className="badge">Red Global</p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Presencia Estratégica para Operar en Cada Huso Horario.
            </h2>
            <p className="text-lg text-muted">
              Ubicaciones clave en puertos, aeropuertos y zonas francas para asegurar cumplimiento local y
              visibilidad regional.
            </p>
            <div className="space-y-4">
              {locations.map((location) => (
                <div
                  key={location.city}
                  className="flex items-start gap-4 rounded-2xl border border-slate/60 bg-white/80 p-4"
                >
                  <MapPin className="mt-1 h-5 w-5 text-signal" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-mist">{location.city}</p>
                    <p className="text-sm text-muted break-words">{location.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
