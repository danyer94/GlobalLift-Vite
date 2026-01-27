type FooterProps = {
  logoSrc: string;
};

export function Footer({ logoSrc }: FooterProps) {
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
            <p className="text-sm text-muted">
              Soluciones premium de exportación para empresas que necesitan control, velocidad y precisión
              global.
            </p>
          </div>
          <div className="space-y-3 text-sm text-muted">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Servicios</p>
            <p>Logística marítima</p>
            <p>Carga aérea</p>
            <p>Consultoría</p>
            <p>Compliance aduanero</p>
          </div>
          <div className="space-y-3 text-sm text-muted">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Compañía</p>
            <p>Nosotros</p>
            <p>Liderazgo</p>
            <p>Seguridad</p>
            <p>Sostenibilidad</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-slate/60 pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} GlobalLift. Todos los derechos reservados.</p>
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
