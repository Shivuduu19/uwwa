/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'LL': { 'min': '1440px' },
        'btl': { 'max': '991px' }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        arrow: 'arrow ease-in-out'
      },
      keyframes: {
        arrow: { '0%': { strokeDasharray: '0 1250' }, '100%': { strokeDasharray: '1250 0' } }
      }
    },
  },
  plugins: [],
};
