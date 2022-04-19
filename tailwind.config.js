module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'light-orange': '#F79B4C',
        'dark-orange': '#F4822F',
        'darker-orange': '#D46213',
        'darkest-orange': '#B85511',
        'light-blue': '#7BA0FF',
        'lighter-orange': '#F8A780',
        'yellow': '#FFDA7B',
        'grey-text': "#6F6F6F",
        "purple": "#8E2DE2"
      },
      fontFamily: {
        para: ['Chivo', 'sans-serif'],
        heading: ['Oxygen', 'sans-serif'],
        display: ['Chivo', 'sans-serif']
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
