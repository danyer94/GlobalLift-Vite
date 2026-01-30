import type { ProcessCopy } from '../content/siteContent';

type ProcessProps = {
  copy: ProcessCopy;
};

const splitItem = (item: string) => {
  const divider = ' — ';
  const index = item.indexOf(divider);

  if (index === -1) {
    return { title: item, description: '' };
  }

  return {
    title: item.slice(0, index),
    description: item.slice(index + divider.length),
  };
};

export function Process({ copy }: ProcessProps) {
  return (
    <section id="process" className="bg-graphite py-24">
      <div className="container mx-auto px-6">
        <div>
          <p className="badge">{copy.label}</p>
          <h2 className="mt-6 text-3xl font-semibold md:text-4xl">{copy.heading}</h2>
        </div>
        <div className="mt-12">
          <div className="relative hidden lg:block">
            <span className="stepper-line" aria-hidden="true" />
          </div>
          <ol className="mt-6 grid gap-6 lg:grid-cols-4 lg:gap-8">
            {copy.steps.map((step, index) => {
              const { title, description } = splitItem(step);
              const stepNumber = `${index + 1}`.padStart(2, '0');

              return (
                <li key={step} className="panel-solid p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-semibold text-signal-strong">{stepNumber}</span>
                    <span className="h-px flex-1 bg-slate/70 lg:hidden" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm text-muted">
                    <span className="font-semibold text-mist">{title}</span>
                    {description ? ` — ${description}` : ''}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
