import { Boxes, FileCheck, Globe2, Handshake, Plane, Ship, ShieldCheck, Truck } from 'lucide-react';
import type { ServicesCopy } from '../content/siteContent';
import { MotionSection } from './MotionSection';

type ServicesProps = {
  copy: ServicesCopy;
};

const getIconForService = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('marítimo') || t.includes('ocean')) return Ship;
  if (t.includes('aéreo') || t.includes('air')) return Plane;
  if (t.includes('terrestre') || t.includes('land')) return Truck;
  if (t.includes('aduanas') || t.includes('customs')) return FileCheck;
  if (t.includes('almacenamiento') || t.includes('storage')) return Boxes;
  if (t.includes('seguro') || t.includes('insurance')) return ShieldCheck;
  if (t.includes('asesoría') || t.includes('consulting')) return Handshake;
  return Globe2;
};

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
    <MotionSection id="services" className="section section-alt" decorVariant="grid" parallaxStrength={20}>
      <div className="container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="badge">{copy.label}</p>
            <h2 className="section-title font-display mt-6">{copy.heading}</h2>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item) => {
            const { title, description } = splitItem(item);
            const Icon = getIconForService(title);

            return (
              <div key={item} className="tile group">
                <span className="icon-dot">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="mt-4 text-sm font-semibold text-foreground">{title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                <div className="mt-6 h-px w-full bg-border/70" aria-hidden="true" />
                <p className="mt-3 text-xs text-muted-foreground">{copy.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
