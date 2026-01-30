import type { WhyCopy } from '../content/siteContent';

type WhyProps = {
  copy: WhyCopy;
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

export function Why({ copy }: WhyProps) {
  return (
    <section id="why" className="bg-ink py-24">
      <div className="container mx-auto px-6">
        <div>
          <p className="badge">{copy.label}</p>
          <h2 className="mt-6 text-3xl font-semibold md:text-4xl">{copy.heading}</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item) => {
            const { title, description } = splitItem(item);

            return (
              <div key={item} className="card">
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

