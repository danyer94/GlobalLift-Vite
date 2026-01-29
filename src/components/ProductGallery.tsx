import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ProductGalleryCopy, ProductGalleryItem } from '../content/siteContent';

type ProductGalleryProps = {
  items: ProductGalleryItem[];
  copy: ProductGalleryCopy;
};

const AUTO_PLAY_MS = 3000;
const PRODUCT_BACKGROUNDS = [
  `${import.meta.env.BASE_URL}images/mangos_1.jpeg`,
  `${import.meta.env.BASE_URL}images/mangos_4.jpeg`,
  `${import.meta.env.BASE_URL}images/tomates.jpeg`,
];

export function ProductGallery({ items, copy }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const total = items.length;
  const backgroundImage = PRODUCT_BACKGROUNDS[activeIndex % PRODUCT_BACKGROUNDS.length];
  const backdropStyle = useMemo(() => {
    if (!backgroundImage) {
      return undefined;
    }
    return {
      '--product-bg': `url(${backgroundImage})`,
    } as CSSProperties;
  }, [backgroundImage]);

  useEffect(() => {
    if (total <= 1 || isOpen) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTO_PLAY_MS);

    return () => window.clearInterval(intervalId);
  }, [total, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % total);
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + total) % total);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, total]);

  if (total === 0) {
    return null;
  }

  const activeItem = items[activeIndex] ?? items[0];

  return (
    <section id="products" className="product-backdrop bg-graphite py-24" style={backdropStyle}>
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:items-end">
          <div>
            <p className="badge">{copy.badge}</p>
            <h2 className="mt-6 text-3xl font-semibold md:text-4xl">{copy.heading}</h2>
          </div>
          <p className="text-lg text-muted">{copy.subheading}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr,0.75fr] lg:items-start">
          <div className="relative">
            <figure className="group relative overflow-hidden rounded-2xl border border-slate/60 bg-white shadow-soft">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="block w-full"
                aria-label={copy.viewFullLabel}
              >
                <img
                  src={activeItem.src}
                  alt={activeItem.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-[22rem] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mist/80 via-mist/25 to-transparent" />
              <figcaption className="pointer-events-none absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 text-ink">
                <div>
                  <p className="text-sm font-semibold text-ink">{activeItem.label}</p>
                  <p className="text-xs text-ink/75">{activeItem.category}</p>
                </div>
                <span className="rounded-full border border-ink/30 bg-ink/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.32em] text-ink">
                  {copy.zoomLabel}
                </span>
              </figcaption>
            </figure>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4">
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev - 1 + total) % total)}
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-slate/60 bg-white/80 text-mist shadow-soft backdrop-blur transition-colors hover:bg-white"
                aria-label={copy.prevLabel}
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev + 1) % total)}
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-slate/60 bg-white/80 text-mist shadow-soft backdrop-blur transition-colors hover:bg-white"
                aria-label={copy.nextLabel}
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="panel-solid p-6">
            <p className="text-xs uppercase tracking-[0.32em] text-muted">{copy.focusLabel}</p>
            <h3 className="mt-4 text-2xl font-semibold text-mist">{activeItem.label}</h3>
            <p className="mt-3 text-sm text-muted">{activeItem.alt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
              <span className="rounded-full border border-slate/60 bg-white px-3 py-1 text-xs uppercase tracking-[0.3em] text-mist">
                {activeItem.category}
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-muted">
                {activeIndex + 1} / {total}
              </span>
              <span className="text-xs text-muted">{copy.autoRotateLabel}</span>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-muted">
              {copy.detailItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {copy.highlightItems.map((item) => (
            <div key={item} className="panel-solid p-5 text-sm text-muted">
              {item}
            </div>
          ))}
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-mist/80 px-4 py-8">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={() => setIsOpen(false)}
            aria-label={copy.closeViewLabel}
          />
          <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-slate/60 bg-white shadow-soft">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate/60 bg-white/90 text-mist shadow-soft backdrop-blur transition-colors hover:bg-white"
              aria-label={copy.closeButtonLabel}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
            <img
              src={activeItem.src}
              alt={activeItem.alt}
              className="h-[70vh] w-full bg-ink/5 object-contain"
              loading="lazy"
              decoding="async"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate/60 px-6 py-4">
              <div>
                <p className="text-sm font-semibold text-mist">{activeItem.label}</p>
                <p className="text-xs text-muted">{activeItem.category}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveIndex((prev) => (prev - 1 + total) % total)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate/60 bg-white text-mist shadow-soft transition-colors hover:bg-graphite"
                  aria-label={copy.prevLabel}
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIndex((prev) => (prev + 1) % total)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate/60 bg-white text-mist shadow-soft transition-colors hover:bg-graphite"
                  aria-label={copy.nextLabel}
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
