/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--ink) / <alpha-value>)',
        graphite: 'rgb(var(--graphite) / <alpha-value>)',
        steel: 'rgb(var(--steel) / <alpha-value>)',
        slate: 'rgb(var(--slate) / <alpha-value>)',
        mist: 'rgb(var(--text) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        signal: 'rgb(var(--brand-secondary) / <alpha-value>)',
        'signal-strong': 'rgb(var(--brand-primary) / <alpha-value>)',
        'signal-soft': 'rgb(var(--brand-accent) / <alpha-value>)',
        plate: 'rgb(var(--plate) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Onest', 'system-ui', 'sans-serif'],
        display: ['Unbounded', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        soft: '0 24px 60px rgba(14, 34, 58, 0.12)',
        signal: '0 0 0 1px rgba(64, 160, 208, 0.25), 0 24px 50px rgba(14, 34, 58, 0.18)',
        lift: '0 18px 40px rgba(14, 34, 58, 0.14)',
      },
    },
  },
  plugins: [],
};
