/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b1b28',
        graphite: '#102435',
        steel: '#133146',
        slate: '#1c3f5b',
        mist: '#e9f2f8',
        muted: '#a8bdcc',
        signal: '#3da2e2',
        plate: '#f7fbff',
      },
      fontFamily: {
        sans: ['Onest', 'system-ui', 'sans-serif'],
        display: ['Unbounded', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        soft: '0 22px 60px rgba(5, 16, 28, 0.45)',
        signal: '0 0 0 1px rgba(61, 162, 226, 0.35), 0 20px 50px rgba(7, 20, 32, 0.6)',
      },
    },
  },
  plugins: [],
};
