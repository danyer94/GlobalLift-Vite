import { ChevronDown } from 'lucide-react';
import type { FaqCopy } from '../content/siteContent';

type FaqProps = {
  copy: FaqCopy;
};

export function Faq({ copy }: FaqProps) {
  // Generar Schema.org FAQPage markup para GEO optimization
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="section section-alt" itemScope itemType="https://schema.org/FAQPage">
      {/* Schema.org FAQPage markup para SEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div>
          <p className="badge">{copy.label}</p>
          <h2 className="section-title font-display mt-6">{copy.heading}</h2>
        </div>
        <div className="mt-12 grid gap-4">
          {copy.items.map((item) => (
            <details 
              key={item.question} 
              className="faq-panel group panel-solid p-5"
              itemScope 
              itemProp="mainEntity" 
              itemType="https://schema.org/Question"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                <span itemProp="name">{item.question}</span>
                <ChevronDown className="h-4 w-4 text-signal transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div data-panel itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="mt-3 text-sm text-muted" itemProp="text">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
