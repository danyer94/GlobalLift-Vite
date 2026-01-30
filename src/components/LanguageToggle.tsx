import type { Language } from '../content/siteContent';

type LanguageToggleProps = {
  value: Language;
  onChange: (value: Language) => void;
};

const options: Array<{ value: Language; short: string }> = [
  { value: 'es', short: 'ES' },
  { value: 'en', short: 'EN' },
];

export function LanguageToggle({ value, onChange }: LanguageToggleProps) {
  const indicatorClass = value === 'en' ? 'translate-x-full' : 'translate-x-0';

  return (
    <div
      className="relative grid grid-cols-2 items-center rounded-full border border-slate/60 bg-white/80 p-1 text-xs font-semibold shadow-soft backdrop-blur"
      role="radiogroup"
    >
      <span
        className={`pointer-events-none absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-signal/90 shadow-soft transition-transform duration-300 ${indicatorClass}`}
        aria-hidden="true"
      />
      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(option.value)}
            className={`relative z-10 inline-flex items-center justify-center gap-2 rounded-full px-3 py-1.5 transition-colors ${
              isActive ? 'text-ink' : 'text-muted hover:text-mist'
            }`}
          >
            <span className="text-[0.6rem] uppercase tracking-[0.32em]">{option.short}</span>
          </button>
        );
      })}
    </div>
  );
}
