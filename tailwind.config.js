/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '1.5rem',
        lg: '2.5rem',
        xl: '3rem',
      },
    },
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
      borderRadius: {
        panel: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        signal: 'var(--shadow-signal)',
        lift: 'var(--shadow-lift)',
      },
    },
  },
  plugins: [],
};
