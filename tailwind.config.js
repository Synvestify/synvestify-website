/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark:   '#0F172A',
        navy:   { DEFAULT: '#1E3A8A', mid: '#1a3278' },
        accent: { DEFAULT: '#2563EB', light: '#3B82F6', pale: '#60A5FA' },
        brand:  { soft: '#F0F4FF', border: '#DBEAFE' },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 4px 24px rgba(30,58,138,0.08)',
        md: '0 8px 32px rgba(30,58,138,0.12)',
        lg: '0 16px 48px rgba(30,58,138,0.12)',
      },
      animation: {
        marquee:  'marquee 32s linear infinite',
        fadeInUp: 'fadeInUp 0.7s ease both',
      },
      keyframes: {
        marquee:  { to: { transform: 'translateX(-50%)' } },
        fadeInUp: { from: { opacity: '0', transform: 'translateY(22px)' }, to: { opacity: '1', transform: 'none' } },
      },
    },
  },
  plugins: [],
}
