/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#111111', // Rich Black
          dark: '#000000',
          light: '#333333',
        },
        secondary: {
          DEFAULT: '#333333', // Dark Gray
          dark: '#1a1a1a',
          light: '#4d4d4d',
        },
        accent: {
          DEFAULT: '#C6A15B', // Gold
          hover: '#A38446',
        },
        background: {
          DEFAULT: '#F5F5F5', // Off-white
          dark: '#111111',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#1a1a1a',
        },
        text: {
          primary: '#111111',
          secondary: '#666666',
          muted: '#999999',
        },
        border: '#E5E5E5',
        success: '#22c55e',
        danger: '#ef4444',
        warning: '#f59e0b',
      },
      fontFamily: {
        sans: ['var(--font-family)', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'premium-hover': '0 10px 40px -5px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
