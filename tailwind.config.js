/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'racing-red': '#3B82F6',
        'silver-accent': '#E5E7EB',
        'dark-gray': '#0a0a0a',
        'matte-black': '#1a1a1a',
        'carbon': '#121212',
        'light-gray': '#f5f5f5',
        'medium-gray': '#1a1a1a',
        'call-green': '#10B981',
      },
      fontFamily: {
        'racing': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 3px #E5E7EB' },
          '100%': { boxShadow: '0 0 8px #E5E7EB, 0 0 15px #E5E7EB' },
        },
      },
    },
  },
  plugins: [],
}
