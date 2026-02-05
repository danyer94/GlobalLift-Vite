import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

type ProductGalleryProps = {
  label: string;
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

export function ProductGallery({ label, heading }: ProductGalleryProps) {
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
      <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-card shadow-soft sm:aspect-[21/9]">
        {/* Images */}
        {PRODUCT_IMAGES.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${img}`}
              alt={`${heading} - ${img.split('.')[0]}`}
              className="h-full w-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white opacity-0 backdrop-blur-md transition-all group-hover:opacity-100 hover:bg-black/40"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white opacity-0 backdrop-blur-md transition-all group-hover:opacity-100 hover:bg-black/40"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Zoom Button */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute right-6 bottom-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30 transform transition-transform hover:scale-110 active:scale-95"
          aria-label="Zoom image"
        >
          <Maximize2 className="h-6 w-6" />
        </button>

        {/* Product Info Tag */}
        <div className="absolute bottom-6 left-6 z-20">
          <span className="px-4 py-2 text-sm font-semibold tracking-wider text-white uppercase bg-primary/80 backdrop-blur-md rounded-full border border-white/20 shadow-lg animate-in slide-in-from-left-4 duration-500">
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
                ? 'w-8 bg-primary shadow-[0_0_10px_rgba(var(--brand-primary),0.5)]' 
                : 'w-2.5 bg-primary/20 hover:bg-primary/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-6 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-lg border border-white/20 transition-all hover:bg-white/20 hover:scale-110 active:scale-95"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="relative z-10 flex h-full w-full max-h-[85vh] items-center justify-center p-4">
            <button
              onClick={prevSlide}
              className="absolute left-4 lg:left-10 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white backdrop-blur-md border border-white/10 transition-all hover:bg-white/10"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <img
              src={`${import.meta.env.BASE_URL}images/${PRODUCT_IMAGES[currentIndex]}`}
              alt=""
              className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl animate-in zoom-in-95 duration-500"
              loading="lazy"
              decoding="async"
            />

            <button
              onClick={nextSlide}
              className="absolute right-4 lg:right-10 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white backdrop-blur-md border border-white/10 transition-all hover:bg-white/10"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 text-white">
            <span className="text-xl font-semibold tracking-widest uppercase">
              {PRODUCT_IMAGES[currentIndex].split('.')[0].replace('_', ' ')}
            </span>
            <div className="flex items-center gap-2 text-white/50 font-mono text-sm">
              <span className="text-white font-bold">{currentIndex + 1}</span>
              <span>/</span>
              <span>{total}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
