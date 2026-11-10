/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        hud: {
          bg: '#080C10',
          surface: '#0D1117',
          panel: '#121820',
          border: '#2A363F',
          cyan: '#00F2FE',
          teal: '#4FACFE',
          neon: '#00E5FF',
          coral: '#FF5E3A',
          amber: '#FFAA00',
          muted: '#8B949E'
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    },
  },
  plugins: [],
};
