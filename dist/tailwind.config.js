/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./components/*.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#aa1520',
        'primary-light': '#c74451',
        'primary-dark': '#8a1119'
      },
      backgroundImage: {
        'backgroundcard': "url('./images/backgroundcard.webp')",
        'contact': "url('./images/photo contact.webp')",
        'backgroundatout': "url('./images/backgroundatout.webp')",
        'hero': "url('./images/backround hero.webp')",
        'services': "url('./images/backgroundcard.webp')",
        'why-choose': "url('./images/backgroundatout.webp')"
      },
      animation: {
        'blob': 'blob 7s infinite',
        'blob-delay-2': 'blob 7s infinite 2s',
        'blob-delay-4': 'blob 7s infinite 4s',
        'blob-delay-6': 'blob 7s infinite 6s',
        'blob-delay-8': 'blob 7s infinite 8s'
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' }
        }
      },
      transitionDuration: {
        '600': '600ms'
      }
    }
  },
  plugins: []
}
