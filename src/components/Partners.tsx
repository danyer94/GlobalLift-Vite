import type { PartnersCopy } from '../content/siteContent';

type PartnersProps = {
  partners: string[];
  copy: PartnersCopy;
};

export function Partners({ partners, copy }: PartnersProps) {
  return (
    <section className="bg-graphite py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="text-sm uppercase tracking-[0.4em] text-muted">{copy.label}</p>
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
