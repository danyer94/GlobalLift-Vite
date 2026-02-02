import { useEffect, useRef, useState } from 'react';

interface ImageRevealSectionProps {
  image1: string;
  image2: string;
  title1: string;
  title2: string;
  subtitle1: string;
  subtitle2: string;
}

export function ImageRevealSection({
  image1,
  image2,
  title1,
  title2,
  subtitle1,
  subtitle2,
}: ImageRevealSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate progress based on how much of the container has been scrolled past
      // The container is 200vh, so we want to map the scroll from when it starts sticking (top: 0)
      // to when it finishes (bottom: viewportHeight)
      const start = rect.top;
      const totalDist = rect.height - viewportHeight;
      
      if (start > 0) {
        setProgress(0);
      } else if (Math.abs(start) > totalDist) {
        setProgress(1);
      } else {
        setProgress(Math.abs(start) / totalDist);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-background overflow-visible">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Base Layer (Image 1) */}
        <div className="absolute inset-0 z-0">
          <img 
            src={image1} 
            alt={title1}
            className="w-full h-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-700 ease-out"
            style={{ 
              opacity: progress < 0.4 ? 1 : 0,
              transform: `translateY(${progress * -50}px)`
            }}
          >
            <span className="badge mb-4 bg-white/10 backdrop-blur-md text-white border-white/20">
              Global Lift
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-semibold text-white mb-4 drop-shadow-lg">
              {title1}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl font-medium drop-shadow-md">
              {subtitle1}
            </p>
          </div>
        </div>

        {/* Reveal Layer (Image 2) */}
        <div 
          className="absolute inset-0 z-10 overflow-hidden pointer-events-none"
          style={{ 
            clipPath: `inset(${Math.max(0, 100 - (progress * 100))}% 0 0 0)` 
          }}
        >
          <img 
            src={image2} 
            alt={title2}
            className="w-full h-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-700 ease-out"
            style={{ 
              opacity: progress > 0.6 ? 1 : 0,
              transform: `translateY(${(1 - progress) * 50}px)`
            }}
          >
            <span className="badge mb-4 bg-white/10 backdrop-blur-md text-white border-white/20">
              Global Lift
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-semibold text-white mb-4 drop-shadow-lg">
              {title2}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl font-medium drop-shadow-md">
              {subtitle2}
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-full bg-white transition-transform duration-100 ease-out origin-top"
              style={{ height: '100%', transform: `scaleY(${progress})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
