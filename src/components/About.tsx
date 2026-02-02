import type { AboutCopy } from '../content/siteContent';

type AboutProps = {
  copy: AboutCopy;
};

export function About({ copy }: AboutProps) {
  return (
    <section id="about" className="section section-plain">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-6">
            <p className="badge">{copy.label}</p>
            <h2 className="section-title font-display">{copy.heading}</h2>
            <div className="space-y-4 section-lead max-w-2xl">
              {copy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="panel-solid p-7 flex flex-col gap-4">
            <span className="pill">{copy.heading}</span>
            <p className="text-lg text-foreground">{copy.oneLine}</p>
            <div className="section-divider h-px" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">{copy.paragraphs[1]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
