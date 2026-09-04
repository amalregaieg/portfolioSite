/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        backend: {
          bg: '#0B0F17',
          card: '#131924',
          'card-hover': '#1A2332',
          border: '#1E293B',
          'border-bright': '#334155',
          text: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#64748B',
          accent: '#0EA5E9',       // Symfony / API Platform blue/cyan
          'accent-hover': '#38BDF8',
          indigo: '#6366F1',       // Tech lead / architecture highlight
          purple: '#8B5CF6',       // PHP brand purple tint
          amber: '#F59E0B',        // DB / Doctrine accent
          emerald: '#10B981',      // Security / CI-CD green
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(14, 165, 233, 0.25)',
        'glow-indigo': '0 0 25px -5px rgba(99, 102, 241, 0.25)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.25)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
