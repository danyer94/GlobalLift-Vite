import type { CaseStudiesCopy, CaseStudy } from '../content/siteContent';

type CaseStudiesProps = {
  caseStudies: CaseStudy[];
  copy: CaseStudiesCopy;
};

export function CaseStudies({ caseStudies, copy }: CaseStudiesProps) {
  return (
    <section id="cases" className="bg-ink py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="badge">{copy.badge}</p>
            <h2 className="mt-6 text-3xl font-semibold md:text-4xl">{copy.heading}</h2>
          </div>
          <p className="text-lg text-muted lg:max-w-xl">{copy.subheading}</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.title} className="panel overflow-hidden">
              <div className="relative h-64">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="h-full w-full object-cover"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-mist/70"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="badge">{caseStudy.category}</span>
                  <h3 className="mt-4 text-xl font-semibold text-mist break-words">{caseStudy.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted break-words">{caseStudy.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
