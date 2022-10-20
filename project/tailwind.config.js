module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      'abel': ['Abel', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'work-sans': ['Work Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'black-bg': '#010208',
        'light-grey': '#E3E4E6',
      },
      backgroundImage: {
        'chameleon': "url('assets/img/chameleon.png')",
        'namibie': "url('assets/img/namibie.png')",
        'vinyle': "url('assets/img/vinyle.png')",
      },
      accessibility: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
  plugins: [],
}