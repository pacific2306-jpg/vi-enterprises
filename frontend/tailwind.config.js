/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          blue: '#1E3A8A',     
          accent: '#0284C7',   
          dark: '#0F172A',     
          gray: '#F8FAFC',     
          metallic: '#E2E8F0', 
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}