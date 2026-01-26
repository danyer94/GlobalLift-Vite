/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#f7fbff',
        graphite: '#eaf3fb',
        steel: '#ddebf7',
        slate: '#cfe0ef',
        mist: '#0f2a43',
        muted: '#5d6f82',
        signal: '#3da2e2',
        plate: '#ffffff',
      },
      fontFamily: {
        sans: ['Onest', 'system-ui', 'sans-serif'],
        display: ['Unbounded', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        soft: '0 24px 60px rgba(12, 32, 58, 0.12)',
        signal: '0 0 0 1px rgba(61, 162, 226, 0.25), 0 24px 50px rgba(12, 32, 58, 0.18)',
      },
    },
  },
  plugins: [],
};
