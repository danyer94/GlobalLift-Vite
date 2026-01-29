import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import type { ContactCopy } from '../content/siteContent';
import { numberFormatter } from '../utils/formatters';

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type ContactProps = {
  copy: ContactCopy;
};

const initialForm: FormState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

const fieldOrder: Array<keyof FormState> = ['name', 'email', 'company', 'message'];

export function Contact({ copy }: ContactProps) {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [formErrors, setFormErrors] = useState<FormState>(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isDirty = Object.values(formData).some((value) => value.trim().length > 0);
  const responseTime = numberFormatter.format(copy.responseTimeHours);
  const messageMin = numberFormatter.format(copy.messageMinChars);

  const applyTokens = (template: string) =>
    template.replace('{{hours}}', responseTime).replace('{{min}}', messageMin);

  const getFieldError = (name: keyof FormState, value: string) => {
    const trimmed = value.trim();

    if (name === 'name') {
      return trimmed.length === 0 ? copy.errors.name : '';
    }

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(trimmed) ? '' : copy.errors.email;
    }

    if (name === 'company') {
      return trimmed.length === 0 ? copy.errors.company : '';
    }

    if (name === 'message') {
      return trimmed.length < copy.messageMinChars ? applyTokens(copy.errors.message) : '';
    }

    return '';
  };

  const validateForm = (values: FormState) => {
    return (Object.keys(values) as Array<keyof FormState>).reduce(
      (acc, key) => ({ ...acc, [key]: getFieldError(key, values[key]) }),
      { ...initialForm }
    );
  };

  useEffect(() => {
    if (!isDirty) {
      return;
    }

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  useEffect(() => {
    setFormErrors(initialForm);
    setIsSubmitted(false);
  }, [copy]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const fieldName = name as keyof FormState;

    setFormData((prev) => ({ ...prev, [fieldName]: value }));
    setFormErrors((prev) => ({ ...prev, [fieldName]: getFieldError(fieldName, value) }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const errors = validateForm(formData);
    const hasErrors = Object.values(errors).some((error) => error.length > 0);

    setFormErrors(errors);

    if (hasErrors) {
      const firstErrorField = fieldOrder.find((field) => errors[field]);
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        if (element instanceof HTMLElement) {
          element.focus();
        }
      }
      return;
    }

    setIsSubmitted(true);
    setFormData(initialForm);
  };

  const description = applyTokens(copy.description);
  const emailDetail = applyTokens(copy.emailDetail);
  const successMessage = applyTokens(copy.successMessage);

  return (
    <section id="contact" className="bg-ink py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.1fr]">
          <div className="space-y-6">
            <p className="badge">{copy.badge}</p>
            <h2 className="text-3xl font-semibold md:text-4xl">{copy.heading}</h2>
            <p className="text-lg text-muted">{description}</p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-signal" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-mist">{copy.addressTitle}</p>
                  <p className="text-sm text-muted">{copy.addressDetail}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-signal" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-mist">{copy.emailTitle}</p>
                  <p className="text-sm text-muted">{emailDetail}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-signal" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-mist">{copy.phoneTitle}</p>
                  <p className="text-sm text-muted">{copy.phoneDetail}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel p-8">
            <h3 className="text-xl font-semibold text-mist">{copy.formTitle}</h3>
            <p className="mt-2 text-sm text-muted">{copy.formDescription}</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="text-sm text-muted">
                  {copy.fields.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(formErrors.name)}
                  aria-describedby={formErrors.name ? 'name-error' : undefined}
                  className="mt-2 w-full rounded-xl border border-slate/60 bg-white px-4 py-3 text-sm focus:border-signal"
                  placeholder={copy.fields.namePlaceholder}
                />
                {formErrors.name ? (
                  <p id="name-error" className="mt-2 text-xs text-red-400" role="alert">
                    {formErrors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-muted">
                  {copy.fields.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="off"
                  spellCheck={false}
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(formErrors.email)}
                  aria-describedby={formErrors.email ? 'email-error' : undefined}
                  className="mt-2 w-full rounded-xl border border-slate/60 bg-white px-4 py-3 text-sm focus:border-signal"
                  placeholder={copy.fields.emailPlaceholder}
                />
                {formErrors.email ? (
                  <p id="email-error" className="mt-2 text-xs text-red-400" role="alert">
                    {formErrors.email}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="company" className="text-sm text-muted">
                  {copy.fields.companyLabel}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="off"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(formErrors.company)}
                  aria-describedby={formErrors.company ? 'company-error' : undefined}
                  className="mt-2 w-full rounded-xl border border-slate/60 bg-white px-4 py-3 text-sm focus:border-signal"
                  placeholder={copy.fields.companyPlaceholder}
                />
                {formErrors.company ? (
                  <p id="company-error" className="mt-2 text-xs text-red-400" role="alert">
                    {formErrors.company}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted">
                  {copy.fields.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  autoComplete="off"
                  value={formData.message}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(formErrors.message)}
                  aria-describedby={formErrors.message ? 'message-error' : undefined}
                  className="mt-2 w-full rounded-xl border border-slate/60 bg-white px-4 py-3 text-sm focus:border-signal"
                  placeholder={copy.fields.messagePlaceholder}
                ></textarea>
                {formErrors.message ? (
                  <p id="message-error" className="mt-2 text-xs text-red-400" role="alert">
                    {formErrors.message}
                  </p>
                ) : null}
              </div>
              <button type="submit" className="btn btn-primary w-full">
                {copy.submitLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              {isSubmitted ? (
                <p className="text-sm text-signal" role="status">
                  {successMessage}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
