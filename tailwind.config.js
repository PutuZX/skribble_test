/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'landing-page-1': "url('/dist/img/bg_header1.jpg')",
        'landing-page-2': "url('/dist/img/bg_hallofmeows.jpg')",
        'landing-page-3': "url('/dist/img/bg_adopting101.jpg')",

      }),
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        'fjalla': ['Fjalla One', 'sans-serif']
      }
    }
  },
  plugins: [],
}
