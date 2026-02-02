import type { NavItem } from '../content/siteContent';

type FooterProps = {
  items: NavItem[];
  logoSrc: string;
  note: string;
};

export function Footer({ items, logoSrc, note }: FooterProps) {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-4">
            <a href="#top" className="flex items-center gap-3">
              <span className="logo-plate">
                <img src={logoSrc} alt="Global Lift SRL" className="h-9 w-auto" width={200} height={110} decoding="async" />
              </span>
              <span className="text-sm tracking-tight text-foreground md:text-lg font-brand">
                Global <span className="font-bold  italic">Lift</span> <span className="font-brand font-medium  text-muted-foreground ml-1">SRL</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-md">{note}</p>
          </div>
          <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {items.map((item) => (
              <a key={item.label} href={item.href} className="transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="font-semibold text-primary">
              {items[items.length - 1]?.label}
            </a>
          </div>
        </div>
        <div className="mt-10 h-px bg-border/70" aria-hidden="true" />
        <p className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} Global Lift SRL</p>
      </div>
    </footer>
  );
}
