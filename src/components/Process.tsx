import type { ProcessCopy } from '../content/siteContent';
import { MotionSection } from './MotionSection';

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
    <MotionSection id="process" className="section section-plain" decorVariant="grid" parallaxStrength={18}>
      <div className="container">
        <div>
          <p className="badge">{copy.label}</p>
          <h2 className="section-title font-display mt-6">{copy.heading}</h2>
        </div>
        <div className="mt-12">
          <div className="relative hidden lg:block">
            <span className="stepper-line" aria-hidden="true" />
          </div>
          <ol className="mt-6 grid gap-6 lg:grid-cols-4 lg:gap-8">
            {copy.steps.map((step, index) => {
              const { title, description } = splitItem(step);
              const stepNumber = `${index + 1}`.padStart(2, '0');
              const showMobileConnector = index < copy.steps.length - 1;

              return (
                <li key={step} className="relative">
                  {showMobileConnector ? (
                    <span
                      className="absolute left-5 top-14 h-[calc(100%+1.5rem)] w-px bg-border/70 lg:hidden"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="panel-solid h-full p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-graphite text-lg font-semibold text-primary">
                        {stepNumber}
                      </span>
                      <span className="h-px flex-1 bg-border/70 lg:hidden" aria-hidden="true" />
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">{title}</span>
                      {description ? ` — ${description}` : ''}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </MotionSection>
  );
}
