import type { ValuesCopy } from '../content/siteContent';

type ValuesProps = {
  copy: ValuesCopy;
};

export function Values({ copy }: ValuesProps) {
  return (
    <section id="values" className="bg-graphite py-24">
      <div className="container mx-auto px-6">
        <div>
          <p className="badge">{copy.label}</p>
          <h2 className="mt-6 text-3xl font-semibold md:text-4xl">{copy.heading}</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="panel-solid p-6">
            <p className="text-xs uppercase tracking-[0.32em] text-muted">{copy.visionLabel}</p>
            <p className="mt-3 text-sm text-mist">{copy.visionText}</p>
          </div>
          <div className="panel-solid p-6">
            <p className="text-xs uppercase tracking-[0.32em] text-muted">{copy.missionLabel}</p>
            <p className="mt-3 text-sm text-mist">{copy.missionText}</p>
          </div>
        </div>
        <div className="mt-12">
          <p className="text-xs uppercase tracking-[0.32em] text-muted">{copy.valuesLabel}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {copy.values.map((value) => (
              <div key={value.title} className="tile">
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
