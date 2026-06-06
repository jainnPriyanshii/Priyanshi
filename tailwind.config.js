/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F0E6',      // Premium Espresso + Gold Background
        card: '#E8DFCF',            // Premium Espresso + Gold Card
        accent: '#8B5E3C',          // Premium Espresso + Gold Accent
        secondary: '#6B5B53',       // Premium Espresso + Gold Secondary
        'text-primary': '#3A2D28',  // Premium Espresso + Gold Text
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      spacing: {
        'container-max': '1200px',
      }
    },
  },
  plugins: [],
}
