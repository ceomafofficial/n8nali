import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors - Warm Terracotta/Rust (Human passion, energy, craftsmanship)
        primary: {
          50: '#fcf4f2',
          100: '#fae6e0',
          200: '#f5c9bc',
          300: '#efa28e',
          400: '#e77459',
          500: '#df5433', // Deep rich terracotta
          600: '#cd401f',
          700: '#ab3217',
          800: '#8f2c17',
          900: '#772917',
          950: '#401208',
        },
        // Accent Colors - Soft Sage / Muted Olive (Organic, calm, grounded)
        accent: {
          50: '#f5f7f4',
          100: '#e6ebe3',
          200: '#cbd5c7',
          300: '#a9b8a3',
          400: '#869a7d',
          500: '#687e5f',
          600: '#516349',
          700: '#42513c',
          800: '#364232',
          900: '#2d372a',
          950: '#171e15',
        },
        // Deep Navy (Professional, trustworthy but not electric blue)
        deep: {
          50: '#f2f6fa',
          100: '#e0ebf3',
          200: '#bad4e8',
          300: '#8ab4d6',
          400: '#538ebf',
          500: '#3571a3',
          600: '#265985',
          700: '#20476c',
          800: '#1c3d5a',
          900: '#1a334c',
          950: '#112235',
        },
        // Warm Gold/Amber (Instead of neon Emerald, for highlights)
        emerald: {
          50: '#fffdf0',
          100: '#fff8c2',
          200: '#fff085',
          300: '#ffe242',
          400: '#ffd014',
          500: '#ebb300',
          600: '#c28600',
          700: '#9b5f00',
          800: '#7f4b06',
          900: '#6b3f0b',
          950: '#3d2000',
        },
        // Dark Theme - Warm Obsidian / Charcoal (Instead of blue-black deep space)
        dark: {
          50: '#f4f4f3',
          100: '#e5e4e1',
          200: '#c7c5c0',
          300: '#a5a19a',
          400: '#807b74',
          500: '#645e57',
          600: '#4d4842',
          700: '#3e3934',
          800: '#322f2b',
          900: '#2c2925',
          950: '#1b1917', // Very dark warm grey (obsidian/espresso)
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(135deg, #2c2925 0%, #1b1917 50%, #171e15 100%)',
        'gradient-glow': 'linear-gradient(135deg, rgba(223, 84, 51, 0.15) 0%, rgba(104, 126, 95, 0.1) 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(223, 84, 51, 0.15)' },
          '100%': { boxShadow: '0 0 30px rgba(223, 84, 51, 0.3)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 4px 20px rgba(0, 0, 0, 0.4)',
        'glow-md': '0 8px 30px rgba(0, 0, 0, 0.5)',
        'glow-lg': '0 15px 40px rgba(0, 0, 0, 0.6)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'premium': '0 20px 40px -10px rgba(0, 0, 0, 0.7)',
      },
      backdropBlur: {
        'glass': '12px',
      },
    },
  },
  plugins: [],
};

export default config;
