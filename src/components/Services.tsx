import { Boxes, Globe2, Handshake, Package, Ship, Truck } from 'lucide-react';
import type { ServicesCopy } from '../content/siteContent';

type ServicesProps = {
  copy: ServicesCopy;
};

const icons = [Globe2, Ship, Truck, Handshake, Package, Boxes, Globe2];

const splitItem = (item: string) => {
  const divider = ' — ';
  const index = item.indexOf(divider);

  if (index === -1) {
    return { title: item, description: '' };
  }

  return {
    title: item.slice(0, index),
    description: item.slice(index + divider.length),
  };
};

export function Services({ copy }: ServicesProps) {
  return (
    <section id="services" className="bg-graphite py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="badge">{copy.label}</p>
            <h2 className="mt-6 text-3xl font-semibold md:text-4xl">{copy.heading}</h2>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item, index) => {
            const { title, description } = splitItem(item);
            const Icon = icons[index % icons.length];

            return (
              <div key={item} className="tile group">
                <span className="icon-dot">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="mt-4 text-sm text-muted">
                  <span className="font-semibold text-mist">{title}</span>
                  {description ? ` — ${description}` : ''}
                </p>
                <div className="mt-6 h-px w-full bg-slate/60" aria-hidden="true" />
                <p className="mt-3 text-xs text-muted">{copy.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
