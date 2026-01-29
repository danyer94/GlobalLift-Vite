import { ArrowRight } from 'lucide-react';
import type { Language, LanguageToggleCopy, NavItem, NavigationCopy } from '../content/siteContent';
import { LanguageToggle } from './LanguageToggle';

type NavigationProps = {
  items: NavItem[];
  logoSrc: string;
  copy: NavigationCopy;
  languageToggleCopy: LanguageToggleCopy;
  language: Language;
  onLanguageChange: (value: Language) => void;
};

export function Navigation({
  items,
  logoSrc,
  copy,
  languageToggleCopy,
  language,
  onLanguageChange,
}: NavigationProps) {
  return (
    <nav className="fixed top-0 z-50 w-full nav-blur" aria-label={copy.ariaLabel}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <span className="logo-plate">
              <img
                src={logoSrc}
                alt="GlobalLift Import & Export"
                className="h-10 w-auto"
                width={220}
                height={120}
                fetchPriority="high"
                decoding="async"
              />
            </span>
            <span className="text-sm font-semibold tracking-[0.2em] text-mist md:text-base">
              GLOBAL<span className="text-signal">LIFT</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-mist"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle value={language} onChange={onLanguageChange} copy={languageToggleCopy} />
            <a href="#contact" className="btn btn-primary hidden sm:inline-flex">
              {copy.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
