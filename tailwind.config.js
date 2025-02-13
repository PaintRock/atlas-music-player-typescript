/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'eucalyptus': {
    '50': '#ecfdf8',
    '100': '#d1faed',
    '200': '#a7f3db',
    '300': '#6ee7c1',
    '400': '#34d3a2',
    '500': '#10b985',
    '600': '#059669',
    '700': '#047854',
    '800': '#065f43',
    '900': '#064e38',
    '950': '#022c1f',
},
'zest': {
    '50': '#fcf6ee',
    '100': '#f7e5ce',
    '200': '#eec999',
    '300': '#e5a964',
    '400': '#dd8736',
    '500': '#d66d2a',
    '600': '#bd5022',
    '700': '#9e381f',
    '800': '#812d1f',
    '900': '#6a271d',
    '950': '#3c120c',
},


      }
    },
  },
  plugins: [],
}

