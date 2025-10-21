import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New cyan-teal primary palette for liquid glass
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        // Vibrant magenta-purple accent for contrast
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        // Deep navy-indigo dark palette
        dark: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0c2340',
          800: '#0a1929',
          900: '#050f1f',
          950: '#020814',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "liquid-gradient": "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(217, 70, 239, 0.2) 100%)",
        "mesh-gradient": "radial-gradient(at 20% 30%, rgba(6, 182, 212, 0.3) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(217, 70, 239, 0.3) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(34, 211, 238, 0.2) 0px, transparent 50%)",
        bgStars: "url('/background-stars.svg')",
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(6, 182, 212, 0.15)',
        'glass-lg': '0 15px 50px 0 rgba(6, 182, 212, 0.25)',
        'glow': '0 0 40px rgba(6, 182, 212, 0.6)',
        'glow-lg': '0 0 60px rgba(6, 182, 212, 0.8)',
        'glow-accent': '0 0 40px rgba(217, 70, 239, 0.6)',
        'glow-accent-lg': '0 0 60px rgba(217, 70, 239, 0.8)',
        'inner-glow': 'inset 0 1px 2px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'wave': 'wave 10s ease-in-out infinite',
        'blob': 'blob 15s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-15px) translateX(10px)' },
          '50%': { transform: 'translateY(-25px) translateX(-5px)' },
          '75%': { transform: 'translateY(-10px) translateX(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0%) translateY(0%)' },
          '50%': { transform: 'translateX(5%) translateY(-5%)' },
        },
        blob: {
          '0%, 100%': { 
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'rotate(0deg) scale(1)'
          },
          '33%': { 
            borderRadius: '70% 30% 50% 50% / 30% 60% 40% 70%',
            transform: 'rotate(120deg) scale(1.1)'
          },
          '66%': { 
            borderRadius: '40% 60% 70% 30% / 50% 40% 60% 50%',
            transform: 'rotate(240deg) scale(0.95)'
          },
        },
      },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    }
  },
  plugins: [],
};
export default config;
