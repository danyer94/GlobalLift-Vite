type PartnersProps = {
  partners: string[];
};

export function Partners({ partners }: PartnersProps) {
  return (
    <section className="bg-graphite py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="text-sm uppercase tracking-[0.4em] text-muted">Confianza Global</p>
          <div className="flex flex-wrap items-center gap-8 text-lg text-mist">
            {partners.map((partner) => (
              <span key={partner} className="text-base text-muted">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
