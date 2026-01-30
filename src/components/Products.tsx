import type { ProductsCopy } from '../content/siteContent';
import { ProductGallery } from './ProductGallery';

type ProductsProps = {
  copy: ProductsCopy;
};

export function Products({ copy }: ProductsProps) {
  return (
    <section id="products" className="bg-ink py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:items-start">
          <div>
            <p className="badge">{copy.label}</p>
            <h2 className="mt-6 text-3xl font-semibold md:text-4xl">{copy.heading}</h2>
          </div>
          <div className="space-y-4 text-lg text-muted">
            <p>{copy.exportText}</p>
            <p>{copy.supplyText}</p>
          </div>
        </div>
        <ProductGallery />
        <div className="mt-10 panel-solid p-6">
          <a href="#contact" className="text-sm font-semibold text-signal transition-colors hover:text-signal/80">
            {copy.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
