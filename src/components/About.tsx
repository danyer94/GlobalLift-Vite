import type { AboutCopy } from '../content/siteContent';

type AboutProps = {
  copy: AboutCopy;
};

export function About({ copy }: AboutProps) {
  return (
    <section id="about" className="bg-ink py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          <div className="space-y-6">
            <p className="badge">{copy.label}</p>
            <h2 className="text-3xl font-semibold md:text-4xl">{copy.heading}</h2>
            <div className="space-y-4 text-lg text-muted">
              {copy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="panel-solid p-6 flex flex-col gap-4">
            <span className="pill">{copy.heading}</span>
            <p className="text-lg text-mist">{copy.oneLine}</p>
            <div className="section-divider h-px" aria-hidden="true" />
            <p className="text-sm text-muted">{copy.paragraphs[1]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
