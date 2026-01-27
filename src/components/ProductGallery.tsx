import type { ProductGalleryItem } from '../content/siteContent';

type ProductGalleryProps = {
  items: ProductGalleryItem[];
};

const FEATURED_INDICES = new Set([0, 4, 9, 13]);

export function ProductGallery({ items }: ProductGalleryProps) {
  return (
    <section id="products" className="bg-graphite py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:items-end">
          <div>
            <p className="badge">Productos</p>
            <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
              Catálogo exportable con empaque certificado y control de calidad.
            </h2>
          </div>
          <p className="text-lg text-muted">
            Fotografías reales de productos, selección y empaquetado listos para despacho internacional. Cada lote
            se valida con estándares de inocuidad y trazabilidad.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const isFeatured = FEATURED_INDICES.has(index);
            return (
              <figure
                key={item.src}
                className={`group relative overflow-hidden rounded-2xl border border-slate/60 bg-white shadow-soft ${
                  isFeatured ? 'lg:col-span-2' : ''
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mist/80 via-mist/20 to-transparent opacity-100 sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100" />
                <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 text-ink opacity-100 sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100">
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.label}</p>
                    <p className="text-xs text-ink/75">{item.category}</p>
                  </div>
                  <span className="rounded-full border border-ink/30 bg-ink/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.32em] text-ink">
                    Export
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            'Control de temperatura y humedad en cada etapa de empaque.',
            'Etiquetado multilingüe con trazabilidad por lote y destino.',
            'Protección de impacto para mantener frescura y presentación.',
          ].map((item) => (
            <div key={item} className="panel-solid p-5 text-sm text-muted">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
