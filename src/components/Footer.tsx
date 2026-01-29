import type { FooterCopy } from '../content/siteContent';

type FooterProps = {
  logoSrc: string;
  copy: FooterCopy;
};

export function Footer({ logoSrc, copy }: FooterProps) {
  const year = new Date().getFullYear();
  const rights = copy.rights.replace('{{year}}', `${year}`);

  return (
    <footer className="bg-graphite py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr,0.8fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="logo-plate">
                <img
                  src={logoSrc}
                  alt="GlobalLift Import & Export"
                  className="h-10 w-auto"
                  width={220}
                  height={120}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="text-sm font-semibold tracking-[0.2em] text-mist md:text-base">
                GLOBAL<span className="text-signal">LIFT</span>
              </span>
            </div>
            <p className="text-sm text-muted">{copy.description}</p>
          </div>
          <div className="space-y-3 text-sm text-muted">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">{copy.servicesTitle}</p>
            {copy.servicesItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="space-y-3 text-sm text-muted">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">{copy.companyTitle}</p>
            {copy.companyItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-slate/60 pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>{rights}</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com"
              className="text-muted transition-colors hover:text-signal"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com"
              className="text-muted transition-colors hover:text-signal"
              aria-label="X"
            >
              X
            </a>
            <a
              href="https://www.youtube.com"
              className="text-muted transition-colors hover:text-signal"
              aria-label="YouTube"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
