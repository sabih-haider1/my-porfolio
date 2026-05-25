/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e6f7ff',
          200: '#bfefff',
          300: '#99e7ff',
          400: '#4fdcff',
          500: '#22d3ee',
          600: '#14a5b6',
          700: '#0b6b78',
        },
        accent: {
          blue: '#22d3ee',
          green: '#10b981',
        },
        surface: {
          default: '#1f2937',
          muted: '#374151'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['2.25rem', { lineHeight: '1.05', fontWeight: '800' }],
        'display-md': ['1.75rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h3': ['1.25rem', { lineHeight: '1.25', fontWeight: '700' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }]
      },
      spacing: {
        'rhythm-1': '0.5rem',
        'rhythm-2': '1rem',
        'rhythm-3': '1.5rem',
        'rhythm-4': '2rem',
        'rhythm-5': '3rem',
        'rhythm-6': '4rem'
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '1rem',
        'pill': '9999px'
      },
      boxShadow: {
        'elev-1': '0 6px 18px rgba(2,6,23,0.45)',
        'elev-2': '0 12px 30px rgba(2,6,23,0.6)',
        'elev-3': '0 20px 40px rgba(2,6,23,0.7)'
      },
      maxWidth: {
        'content': '1200px',
        'narrow': '820px'
      }
    },
  },
  plugins: [],
} 