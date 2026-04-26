/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './about.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        primary:     '#0e3b3e',
        'primary-dark': '#0b2b2d',
        secondary:   '#d6f866',
      },
    },
  },
  plugins: [],
};
