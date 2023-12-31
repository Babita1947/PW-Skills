/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1200px',
      // => @media (min-width: 1200px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }

      'mywidth': '765px',
      'smw': '635px',
      'minw': '900px',
      'boxw' :'825px',
      'storyw' : "1000px",
    },
    extend: {},
  },
  plugins: [],
}

