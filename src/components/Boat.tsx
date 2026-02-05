import { motion, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useScrollProgress } from '../utils/scroll';

type BoatProps = {
  className?: string;
};

export function Boat({ className }: BoatProps) {
  const scrollYProgress = useScrollProgress();
  const reduceMotion = useReducedMotion();
  const travel = useTransform(scrollYProgress, [0, 1], [24, 520]);
  const y = useSpring(travel, { stiffness: 100, damping: 30, mass: 1 });

  return (
    <motion.div
      className={`boat fixed right-6 top-[12vh] z-40 hidden md:block pointer-events-none ${className ?? ''}`}
      style={{ y: reduceMotion ? 0 : y, willChange: 'transform' }}
      animate={
        reduceMotion
          ? undefined
          : {
              rotate: [-2.5, 2.5, -2.5],
              x: [0, 6, 0],
            }
      }
      transition={
        reduceMotion
          ? undefined
          : {
              duration: 5.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }
      }
      aria-hidden="true"
    >
      <div className="boat-shell">
        <svg viewBox="0 0 96 96" className="boat-icon" role="presentation">
          <path
            d="M16 64h64l-12 14H28L16 64Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path d="M48 18v40" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M48 22l26 28H48V22Z" fill="currentColor" opacity="0.85" />
          <path d="M46 26l-20 24h20V26Z" fill="currentColor" opacity="0.5" />
          <circle cx="48" cy="60" r="4" fill="currentColor" opacity="0.9" />
        </svg>
      </div>
    </motion.div>
  );
}
