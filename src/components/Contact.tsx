import { ArrowRight } from 'lucide-react';
import type { FormEvent, HTMLAttributes } from 'react';
import type { ContactCopy } from '../content/siteContent';

type ContactProps = {
  copy: ContactCopy;
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

export function Contact({ copy }: ContactProps) {
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
    <section id="contact" className="bg-ink py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.1fr]">
          <div className="space-y-6">
            <p className="badge">{copy.label}</p>
            <h2 className="text-3xl font-semibold md:text-4xl">{copy.heading}</h2>
            <p className="text-lg text-muted">{copy.description}</p>
          </div>
          <div className="panel p-8">
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              {fieldConfig.map((field, index) => {
                const label = copy.form.fields[index] ?? '';
                const sharedClasses = `mt-2 w-full rounded-xl border border-slate/60 bg-white px-4 py-3 text-sm focus:border-signal`;

                return (
                  <div key={field.id} className={field.colSpan ?? ''}>
                    <label htmlFor={field.id} className="text-sm text-muted">
                      {label}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.id}
                        name={field.id}
                        rows={4}
                        required={field.required}
                        className={sharedClasses}
                      />
                    ) : (
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        inputMode={field.inputMode}
                        required={field.required}
                        className={sharedClasses}
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
                <p className="mt-3 text-xs text-muted">{copy.form.micro}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

