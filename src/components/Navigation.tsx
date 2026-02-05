import { ArrowRight } from 'lucide-react';
import type { Language, NavItem, NavigationCopy } from '../content/siteContent';
import { LanguageToggle } from './LanguageToggle';
import { Logo } from './Logo';

type NavigationProps = {
  items: NavItem[];
  copy: NavigationCopy;
  language: Language;
  onLanguageChange: (value: Language) => void;
};

export function Navigation({ items, copy, language, onLanguageChange }: NavigationProps) {
  return (
    <nav className="fixed top-0 z-50 w-full nav-blur" aria-label="Primary">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <a href="#top">
            <Logo />
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
