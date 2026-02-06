import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

type ProductGalleryProps = {
  heading: string;
};

const PRODUCT_IMAGES = [
  'aguacates.png',
  'mango_product.png',
  'mangos_1.png',
  'pimientos.png',
  'products.png',
  'tomates.png',
  'verdura.png',
];

export function ProductGallery({ heading }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const total = PRODUCT_IMAGES.length;
  const autoPlayInterval = 5000;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isLightboxOpen) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, isLightboxOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (event.key === 'Escape') setIsLightboxOpen(false);
        if (event.key === 'ArrowRight') nextSlide();
        if (event.key === 'ArrowLeft') prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, nextSlide, prevSlide]);

  return (
    <div className="mt-12 w-full max-w-5xl mx-auto">
      {/* Carousel Container */}
      <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft sm:aspect-[21/9]">
        {/* Images */}
        {PRODUCT_IMAGES.map((img, index) => (
          <div
            key={img}
            className={`media-crossfade absolute inset-0 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${img}`}
              alt={`${heading} - ${img.split('.')[0]}`}
              className="h-full w-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-primary/10 to-transparent" />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="icon-button-overlay absolute left-4 top-1/2 z-20 -translate-y-1/2 opacity-95 md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="icon-button-overlay absolute right-4 top-1/2 z-20 -translate-y-1/2 opacity-95 md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Zoom Button */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="icon-button-overlay absolute bottom-6 right-6 z-20"
          aria-label="Zoom image"
        >
          <Maximize2 className="h-6 w-6" />
        </button>

        {/* Product Info Tag */}
        <div className="absolute bottom-6 left-6 z-20">
          <span className="rounded-full border border-primary-foreground/25 bg-primary/80 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-lg backdrop-blur-md">
            {PRODUCT_IMAGES[currentIndex].split('.')[0].replace('_', ' ')}
          </span>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="mt-8 flex justify-center gap-3">
        {PRODUCT_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 transition-all duration-300 rounded-full ${
              index === currentIndex 
                ? 'w-8 bg-secondary shadow-[0_0_0_4px_rgb(var(--secondary)_/_0.18)]' 
                : 'w-2.5 bg-secondary/25 hover:bg-secondary/45'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="cinema-fade-in fullscreen-surface fixed inset-0 z-[100] flex flex-col items-center justify-center backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="icon-button-overlay absolute right-6 top-6 z-20"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="relative z-10 flex h-full w-full max-h-[85vh] items-center justify-center p-4">
            <button
              onClick={prevSlide}
              className="icon-button-overlay absolute left-4 z-20 h-14 w-14 lg:left-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <img
              src={`${import.meta.env.BASE_URL}images/${PRODUCT_IMAGES[currentIndex]}`}
              alt=""
              className="cinema-zoom-in max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
              loading="lazy"
              decoding="async"
            />

            <button
              onClick={nextSlide}
              className="icon-button-overlay absolute right-4 z-20 h-14 w-14 lg:right-10"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 text-primary-foreground">
            <span className="text-xl font-semibold tracking-widest uppercase">
              {PRODUCT_IMAGES[currentIndex].split('.')[0].replace('_', ' ')}
            </span>
            <div className="flex items-center gap-2 font-mono text-sm text-primary-foreground/60">
              <span className="font-bold text-primary-foreground">{currentIndex + 1}</span>
              <span>/</span>
              <span>{total}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
