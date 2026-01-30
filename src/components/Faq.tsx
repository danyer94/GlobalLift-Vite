import { ChevronDown } from 'lucide-react';
import type { FaqCopy } from '../content/siteContent';

type FaqProps = {
  copy: FaqCopy;
};

export function Faq({ copy }: FaqProps) {
  return (
    <section id="faq" className="bg-graphite py-24">
      <div className="container mx-auto px-6">
        <div>
          <p className="badge">{copy.label}</p>
          <h2 className="mt-6 text-3xl font-semibold md:text-4xl">{copy.heading}</h2>
        </div>
        <div className="mt-12 grid gap-4">
          {copy.items.map((item) => (
            <details key={item.question} className="faq-panel group panel-solid p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-mist">
                <span>{item.question}</span>
                <ChevronDown className="h-4 w-4 text-signal transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div data-panel>
                <p className="mt-3 text-sm text-muted">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
