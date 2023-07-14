/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        normal: ['var(--font-favorit'],
        loose: ['var(--font-favorit-extended)']
      },
      spacing: {
        '15': '15px',
        '25': '25px',
        '50': '50px',
        '100': '100px',
        '150': '150px',
        '200': '200px',
      }
    },
  },
  plugins: [],
}
