import { ArrowRight } from 'lucide-react';
import type { Language, NavItem, NavigationCopy } from '../content/siteContent';
import { LanguageToggle } from './LanguageToggle';

type NavigationProps = {
  items: NavItem[];
  logoSrc: string;
  copy: NavigationCopy;
  language: Language;
  onLanguageChange: (value: Language) => void;
};

export function Navigation({ items, logoSrc, copy, language, onLanguageChange }: NavigationProps) {
  return (
    <nav className="fixed top-0 z-50 w-full nav-blur" aria-label="Primary">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <span className="logo-plate">
              <img
                src={logoSrc}
                alt="Global Lift SRL"
                className="h-10 w-auto"
                width={220}
                height={120}
                fetchPriority="high"
                decoding="async"
              />
            </span>
            <span className="text-sm tracking-tight text-foreground md:text-lg font-brand">
              Global <span className="italic font-brand font-bold text-signal-strong">Lift</span> <span className="font-brand font-medium text-muted-foreground ml-1">SRL</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {items.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle value={language} onChange={onLanguageChange} />
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
