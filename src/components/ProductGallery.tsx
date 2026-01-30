import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type ProductGalleryProps = {
  label: string;
  heading: string;
};

const PRODUCT_IMAGES = [
  'aguacate.jpeg',
  'aguacates.jpeg',
  'aguacate_2.jpeg',
  'mangos_1.jpeg',
  'mangos_2.jpeg',
  'mangos_4.jpeg',
  'mangos_6.jpeg',
  'pirmiento.jpeg',
  'tomates.jpeg',
  'verdura.jpeg',
  'cajas.jpeg',
  'cajas_2.jpeg',
  'cajas_3.jpeg',
];

export function ProductGallery({ label, heading }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const total = PRODUCT_IMAGES.length;
  const activeImage = PRODUCT_IMAGES[activeIndex] ?? PRODUCT_IMAGES[0];
  const autoPlayMs = 3000;

  useEffect(() => {
    if (total <= 1 || isOpen) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, autoPlayMs);

    return () => window.clearInterval(intervalId);
  }, [total, isOpen, autoPlayMs]);

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

  return (
    <div className="mt-10 grid gap-6">
      <div className="panel-solid relative overflow-hidden">
        <button type="button" onClick={() => setIsOpen(true)} className="block w-full cursor-zoom-in" aria-label={heading}>
          <img
            src={`${import.meta.env.BASE_URL}images/${activeImage}`}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-[16rem] w-full object-cover transition-transform duration-500 hover:scale-[1.02] sm:h-[20rem] lg:h-[24rem]"
          />
        </button>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4">
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev - 1 + total) % total)}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 text-primary shadow-soft backdrop-blur transition-colors hover:bg-card"
            aria-label={label}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev + 1) % total)}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 text-primary shadow-soft backdrop-blur transition-colors hover:bg-card"
            aria-label={label}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-foreground/90"
          role="dialog"
          aria-modal="true"
          aria-label={heading}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="absolute inset-0 z-10 cursor-default"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-10 flex h-full w-full max-h-full items-center justify-center p-4 pt-16">
            <img
              src={`${import.meta.env.BASE_URL}images/${activeImage}`}
              alt=""
              className="max-h-full max-w-full object-contain"
              loading="lazy"
              decoding="async"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-primary-foreground/20 bg-foreground/50 px-4 py-2 backdrop-blur">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((prev) => (prev - 1 + total) % total);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full text-primary-foreground transition-colors hover:bg-primary-foreground/20"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((prev) => (prev + 1) % total);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full text-primary-foreground transition-colors hover:bg-primary-foreground/20"
              aria-label="Siguiente"
            >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        </div>
      ) : null}
    </div>
  );
}
