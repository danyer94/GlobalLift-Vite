/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0f14',
        graphite: '#111821',
        steel: '#17212c',
        slate: '#1f2a38',
        mist: '#e8eef5',
        muted: '#9aa6b2',
        signal: '#6cf2c4',
      },
      fontFamily: {
        sans: ['Onest', 'system-ui', 'sans-serif'],
        display: ['Unbounded', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(4, 8, 16, 0.45)',
        signal: '0 0 0 1px rgba(108, 242, 196, 0.35), 0 20px 50px rgba(7, 15, 24, 0.6)',
      },
    },
  },
  plugins: [],
};
