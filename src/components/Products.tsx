import { ArrowUpRight } from 'lucide-react';
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
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="card">
            <p className="text-xs uppercase tracking-[0.32em] text-muted">{copy.exportTitle}</p>
            <p className="mt-3 text-sm text-muted">{copy.exportText}</p>
          </div>
          <div className="card">
            <p className="text-xs uppercase tracking-[0.32em] text-muted">{copy.supplyTitle}</p>
            <p className="mt-3 text-sm text-muted">{copy.supplyText}</p>
          </div>
        </div>
        <div className="mt-8 flex justify-start">
          <a href="#contact" className="btn btn-outline">
            {copy.cta}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <ProductGallery label={copy.label} heading={copy.heading} />
      </div>
    </section>
  );
}
