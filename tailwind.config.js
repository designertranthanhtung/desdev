/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0c',
        'neon-cyan': '#00f2ff',
        'neon-green': '#39ff14',
      },
      boxShadow: {
        'neon-glow': '0 0 15px rgba(0, 242, 255, 0.4)',
        'neon-glow-strong': '0 0 25px rgba(0, 242, 255, 0.6)',
      }
    },
  },
  plugins: [],
}
