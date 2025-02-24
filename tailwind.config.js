/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './nuxt.config.{js,ts}',
    './node_modules/@nuxt/ui/dist/**/*.js' // Add @nuxt/ui components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
