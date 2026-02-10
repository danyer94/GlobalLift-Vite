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
  const headerItems = items.filter((item) => item.href !== '#nosotros-valores');

  return (
    <nav className="fixed top-0 z-50 w-full nav-blur" aria-label="Primary">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <a href="#top">
            <Logo />
          </a>
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {headerItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LanguageToggle value={language} onChange={onLanguageChange} />
            <a href="#contact" className="btn btn-primary hidden lg:inline-flex">
              {copy.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="pb-3 md:hidden" aria-label="Section shortcuts">
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1">
            {headerItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-secondary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
