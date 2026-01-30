import { ArrowRight, Check } from 'lucide-react';
import type { FormEvent, HTMLAttributes } from 'react';
import type { ContactCopy } from '../content/siteContent';

type ContactProps = {
  copy: ContactCopy;
  trustCues: string[];
};

type FieldConfig = {
  id: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  required: boolean;
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode'];
  colSpan?: string;
};

const fieldConfig: FieldConfig[] = [
  { id: 'name', type: 'text', required: true },
  { id: 'company', type: 'text', required: true },
  { id: 'email', type: 'email', required: true, inputMode: 'email' },
  { id: 'phone', type: 'tel', required: true, inputMode: 'tel' },
  { id: 'service', type: 'text', required: true },
  { id: 'product', type: 'text', required: false },
  { id: 'message', type: 'textarea', required: true, colSpan: 'sm:col-span-2' },
];

export function Contact({ copy, trustCues }: ContactProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    form.reset();
  };

  return (
    <section id="contact" className="section section-base">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.1fr]">
          <div className="space-y-6">
            <p className="badge">{copy.label}</p>
            <h2 className="section-title font-display">{copy.heading}</h2>
            <p className="section-lead">{copy.description}</p>
            <div className="panel-solid p-6">
              <p className="text-xs uppercase tracking-[0.32em] text-muted">{copy.label}</p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {trustCues.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="icon-dot">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-mist">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="panel p-8 shadow-lift">
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" aria-describedby="contact-helper">
              {fieldConfig.map((field, index) => {
                const label = copy.form.fields[index] ?? '';

                return (
                  <div key={field.id} className={field.colSpan ?? ''}>
                    <label htmlFor={field.id} className="text-sm text-muted">
                      {label}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea id={field.id} name={field.id} rows={4} required={field.required} className="field-input" />
                    ) : (
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        inputMode={field.inputMode}
                        required={field.required}
                        className="field-input"
                      />
                    )}
                  </div>
                );
              })}
              <div className="sm:col-span-2">
                <button type="submit" className="btn btn-primary w-full">
                  {copy.form.submitLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <p id="contact-helper" className="mt-3 text-xs text-muted">
                  {copy.form.micro}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
