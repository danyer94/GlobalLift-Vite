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
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {copy.steps.map((step) => {
            const { title, description } = splitItem(step);

            return (
              <div key={step} className="panel-solid p-5">
                <p className="text-sm text-muted">
                  <span className="font-semibold text-mist">{title}</span>
                  {description ? ` — ${description}` : ''}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

