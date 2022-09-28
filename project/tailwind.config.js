module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      'abel': ['Abel', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'laptop-image': "url('../public/images/laptop-image.svg')",
      },
      blur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}