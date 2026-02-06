import type { CSSProperties } from 'react';
import { Boxes, FileCheck, Globe2, Handshake, Plane, Ship, ShieldCheck, Truck } from 'lucide-react';
import type { ServicesCopy } from '../content/siteContent';
import { MotionSection } from './MotionSection';

type ServicesProps = {
  copy: ServicesCopy;
};

const getIconForService = (title: string) => {
  const normalized = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  if (normalized.includes('maritimo') || normalized.includes('ocean')) return Ship;
  if (normalized.includes('aereo') || normalized.includes('air')) return Plane;
  if (normalized.includes('terrestre') || normalized.includes('land')) return Truck;
  if (normalized.includes('aduanas') || normalized.includes('customs')) return FileCheck;
  if (normalized.includes('almacenamiento') || normalized.includes('storage')) return Boxes;
  if (normalized.includes('seguro') || normalized.includes('insurance')) return ShieldCheck;
  if (normalized.includes('asesoria') || normalized.includes('consulting')) return Handshake;
  return Globe2;
};

const splitItem = (item: string) => {
  const [title, ...rest] = item.split(/\s[—-]\s/u);
  return {
    title: title ?? item,
    description: rest.join(' - '),
  };
};

const SERVICE_MEDIA = [
  { src: 'images/generated/services-multimodal.png', position: 'center 40%' },
  { src: 'images/generated/reveal-air-cargo.png', position: 'center 42%' },
  { src: 'images/generated/reveal-export-orchard.png', position: 'center 44%' },
  { src: 'images/generated/process-operations-desk.png', position: 'center 50%' },
  { src: 'images/generated/products-produce-table.png', position: 'center 42%' },
  { src: 'images/generated/why-compliance-inspection.png', position: 'center 38%' },
  { src: 'images/generated/values-team-warehouse.png', position: 'center 44%' },
];

const getCardSpan = (index: number) => {
  if (index === 0) return 'md:col-span-2 lg:col-span-4 lg:row-span-2';
  if (index === 5 || index === 6) return 'md:col-span-2 lg:col-span-3';
  return 'lg:col-span-2';
};

export function Services({ copy }: ServicesProps) {
  const cinematicStyle = {
    '--cinema-image': `url(${import.meta.env.BASE_URL}images/generated/services-multimodal.png)`,
    '--cinema-position': 'center 38%',
  } as CSSProperties;

  return (
    <MotionSection
      id="services"
      className="section section-alt cinema-surface"
      decorVariant="grid"
      parallaxStrength={20}
      style={cinematicStyle}
    >
      <div className="container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="badge">{copy.label}</p>
            <h2 className="section-title mt-6 font-display">{copy.heading}</h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[minmax(180px,1fr)]">
          {copy.items.map((item, index) => {
            const { title, description } = splitItem(item);
            const Icon = getIconForService(title);
            const media = SERVICE_MEDIA[index % SERVICE_MEDIA.length];
            const mediaStyle = {
              '--service-media': `url(${import.meta.env.BASE_URL}${media.src})`,
              '--service-media-position': media.position,
            } as CSSProperties;
            const isFeatured = index === 0;

            return (
              <article
                key={item}
                className={`service-editorial-card ${getCardSpan(index)} ${
                  isFeatured ? 'service-editorial-card--featured' : ''
                }`}
                style={mediaStyle}
              >
                <span className="icon-dot">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className={`mt-4 font-semibold text-foreground ${isFeatured ? 'text-base md:text-lg' : 'text-sm'}`}>
                  {title}
                </p>
                <p className={`mt-2 text-muted-foreground ${isFeatured ? 'text-sm md:text-base' : 'text-sm'}`}>
                  {description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
