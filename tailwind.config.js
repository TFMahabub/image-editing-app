/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        heading: '1.2rem'
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      colors: {
        primary: 'rgb(59 130 246)',
        borderColor: '#d0d0d0',
        textColor: "#1e1e1e"
      }
    },
  },
  plugins: [],
}

