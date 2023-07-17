/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'heading1': ['2.625rem', '3.125rem'], // 42px, 50px
        'heading2': ['1.875rem', '2.313rem'], // 30px, 36px
        'heading3': ['1.375rem', '26px'], // 22px, 26px
        'p1': ['1.5rem', '1.75rem'], // 24px, 28px
        'p2': ['1.375rem', '26px'], // 22px, 26px
        'p3': ['1.125rem', '1.375rem'], // 18px, 22px
        'label1': ['1.375rem', '1.375rem'], // 22px, 22px
        'label2': ['1.25rem', '1.25rem'], // 20px, 20px
        'label3': ['1rem', '1rem'], // 16px, 16px
      },
      fontFamily: {
        normal: ['var(--font-favorit)'],
        loose: ['var(--font-favorit-extended)']
      },
      spacing: {
        'p5': '0.344rem', // 5px
        '10': '0.625rem', // 10px
        '15': '0.938rem', // 15px
        '20': '1.25rem', // 20px
        '30': '30px', // 30px
        '25': '1.563rem', // 25px
        '50': '3.125rem', // 50px
        '100': '6.25rem', // 100px
        '150': '9.375rem', // 150px
        '200': '12.5rem', // 200px
        '86vh': '86vh',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [],
}
