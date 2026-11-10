/** @type {import('tailwindcss').Config} */
module.exports = {
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
      boxShadow: {
        'hud-cyan': '0 0 15px rgba(0, 242, 254, 0.4)',
        'hud-coral': '0 0 15px rgba(255, 94, 58, 0.4)',
        'hud-glow': '0 0 25px rgba(0, 242, 254, 0.2)'
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  }
};
