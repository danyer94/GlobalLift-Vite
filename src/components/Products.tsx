import type { CSSProperties } from 'react';
import { ArrowUpRight, Package, Ship } from 'lucide-react';
import type { ProductsCopy } from '../content/siteContent';
import { MotionSection } from './MotionSection';
import { ProductGallery } from './ProductGallery';

type ProductsProps = {
  copy: ProductsCopy;
};

export function Products({ copy }: ProductsProps) {
  const cinematicStyle = {
    '--cinema-image': `url(${import.meta.env.BASE_URL}images/generated/products-produce-table.png)`,
    '--cinema-position': 'center 42%',
  } as CSSProperties;

  return (
    <MotionSection
      id="products"
      className="section section-base cinema-surface"
      decorVariant="tide"
      parallaxStrength={20}
      style={cinematicStyle}
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:items-start">
          <div>
            <p className="badge">{copy.label}</p>
            <h2 className="section-title font-display mt-6">{copy.heading}</h2>
          </div>
          <div className="space-y-4 section-lead">
            <p>{copy.exportText}</p>
            <p>{copy.supplyText}</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="card flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="icon-dot">
                <Ship className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                {copy.exportTitle}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{copy.exportText}</p>
          </div>
          <div className="card flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="icon-dot">
                <Package className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                {copy.supplyTitle}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{copy.supplyText}</p>
          </div>
        </div>
        <div className="mt-8 flex justify-start">
          <a href="#contact" className="btn btn-outline">
            {copy.cta}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <ProductGallery heading={copy.heading} />
      </div>
    </MotionSection>
  );
}
