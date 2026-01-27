import type { CompanyProfile, CompanyValue } from '../content/siteContent';

type CompanyOverviewProps = {
  profile: CompanyProfile;
  values: CompanyValue[];
};

export function CompanyOverview({ profile, values }: CompanyOverviewProps) {
  return (
    <section id="about" className="bg-ink py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1.15fr,1fr] lg:items-start">
          <div className="space-y-6">
            <p className="badge">Quiénes Somos</p>
            <h2 className="text-3xl font-semibold md:text-4xl">{profile.name}</h2>
            <p className="text-lg text-muted">{profile.about}</p>
          </div>
          <div className="grid gap-4">
            <div className="panel-solid p-6">
              <p className="text-xs uppercase tracking-[0.32em] text-muted">Nuestra Visión</p>
              <p className="mt-3 text-sm text-mist">{profile.vision}</p>
            </div>
            <div className="panel-solid p-6">
              <p className="text-xs uppercase tracking-[0.32em] text-muted">Nuestra Misión</p>
              <p className="mt-3 text-sm text-mist">{profile.mission}</p>
            </div>
            <div className="panel-solid p-6">
              <p className="text-xs uppercase tracking-[0.32em] text-muted">Nuestro Compromiso</p>
              <p className="mt-3 text-sm text-mist">{profile.commitment}</p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <p className="text-xs uppercase tracking-[0.32em] text-muted">Nuestros Valores</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="card">
                <p className="text-sm font-semibold text-mist">{value.title}</p>
                <p className="mt-2 text-sm text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
