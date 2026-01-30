import type { ValuesCopy } from '../content/siteContent';

type ValuesProps = {
  copy: ValuesCopy;
};

export function Values({ copy }: ValuesProps) {
  return (
    <section id="values" className="section section-base">
      <div className="container">
        <div>
          <p className="badge">{copy.label}</p>
          <h2 className="section-title font-display mt-6">{copy.heading}</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="panel-solid p-6">
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">{copy.visionLabel}</p>
            <p className="mt-3 text-sm text-foreground">{copy.visionText}</p>
          </div>
          <div className="panel-solid p-6">
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">{copy.missionLabel}</p>
            <p className="mt-3 text-sm text-foreground">{copy.missionText}</p>
          </div>
        </div>
        <div className="mt-12">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">{copy.valuesLabel}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {copy.values.map((value) => (
              <div key={value.title} className="tile">
                <p className="text-sm font-semibold text-foreground">{value.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
