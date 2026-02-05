/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.js",
            ],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('../img/bg.png')"
      },
    },
  },
  plugins: [],
}

