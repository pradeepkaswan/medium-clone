/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        gelasio: ['Gelasio', 'serif'],
      },
      colors: {
        white: '#ffffff',
        black: '#000000',
        grey: '#f9f9f9',
        'dark-grey': '#6B6B6B',
        red: '#FF4E4E',
        transparent: 'transparent',
        twitter: '#1DA1F2',
        purple: '#8B46FF',
      },
      fontSize: {
        sm: '12px',
        base: '14px',
        lg: '16px',
        '2xl': '20px',
        '3xl': '28px',
        '4xl': '38px',
        '5xl': '50px',
      },
    },
  },
  plugins: [],
}
