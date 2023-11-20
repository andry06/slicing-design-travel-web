/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['inter'],
        'Circular': ['Circular STD']
      },
      colors: {
        'ungu': '#5D50C6',
        'pink': '#F85E9F',
        'orange': '#FF5722',
        'grey': '#191825',
        'kuning': '#FACD49',
        'cream': 'rgba(250, 205, 73, 0.08)'
      },
      boxShadow : {
        'sm-shadow': [
            '0px 0px 0px rgba(0, 0, 0, 0.07)',
            '0px 34px 75px 0px rgba(0, 0, 0, 0.07)', 
            '0px 137px 137px 0px rgba(0, 0, 0, 0.06)',
            '0px 308px 185px 0px rgba(0, 0, 0, 0.04)',
            '0px 548px 219px 0px rgba(0, 0, 0, 0.01)',
            '0px 856px 240px 0px rgba(0, 0, 0, 0.00)',
        ],
        'lg-shadow': [
            '0px 0px 0px 0px rgba(0, 0, 0, 0.10)',
            '0px 5px 11px 0px rgba(0, 0, 0, 0.10)',
            '0px 20px 20px 0px rgba(0, 0, 0, 0.09)',
            '0px 45px 27px 0px rgba(0, 0, 0, 0.05)',
            '0px 81px 32px 0px rgba(0, 0, 0, 0.01)',
            '0px 126px 35px 0px rgba(0, 0, 0, 0.00)'
        ],
        'xl-shadow': [
          '0px 0px 0px 0px rgba(0, 0, 0, 0.10)',
          '0px 41px 89px 0px rgba(0, 0, 0, 0.10)'
        ],
        'top-destination': [
          '0px 0px 0px 0px rgba(0, 0, 0, 0.05)',
          '0px 32px 71px 0px rgba(0, 0, 0, 0.05)', 
          '0px 128px 128px 0px rgba(0, 0, 0, 0.04)', 
          '0px 288px 173px 0px rgba(0, 0, 0, 0.03)', 
          '0px 513px 205px 0px rgba(0, 0, 0, 0.01)', 
          '0px 801px 224px 0px rgba(0, 0, 0, 0.00)'
        ],
      }
    },
    backgroundImage: {
      'arrow-black': "url('/src/app/assets/images/icons/arrowBlack.svg')",
      'arrow-white': "url('/src/app/assets/images/icons/arrowWhite.svg')",
    }
  },
  plugins: [],
}

