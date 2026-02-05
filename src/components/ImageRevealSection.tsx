import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

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
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // We use useScroll directly on this container to get progress relative to its view
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress into useful animation values
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  const opacity1 = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.4], [0, -50]);
  
  const opacity2 = useTransform(scrollYProgress, [0.6, 1], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.6, 1], [50, 0]);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Base Layer (Image 1) */}
        <div className="absolute inset-0 z-0">
          <img
            src={image1}
            alt={title1}
            className="w-full h-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-black/20" />

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
            style={{
              opacity: reduceMotion ? 1 : opacity1,
              y: reduceMotion ? 0 : y1,
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
          </motion.div>
        </div>

        {/* Reveal Layer (Image 2) */}
        <motion.div
          className="absolute inset-0 z-10 overflow-hidden pointer-events-none"
          style={{
            clipPath: reduceMotion ? "inset(0% 0% 0% 0%)" : clipPath,
            willChange: 'clip-path'
          }}
        >
          <img
            src={image2}
            alt={title2}
            className="w-full h-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-black/20" />

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
            style={{
              opacity: reduceMotion ? 1 : opacity2,
              y: reduceMotion ? 0 : y2,
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
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-white origin-top"
              style={{ height: '100%', scaleY: scrollYProgress }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

