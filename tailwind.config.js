module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#aa1520',
        'primary-light': '#c74451',
        'primary-dark': '#8a1119'
      },
      backgroundImage: {
        'backgroundcard': "url('images/backgroundcard.jpg')",
        'contact': "url('images/photo contact.png')",
        'backgroundatout': "url('images/backgroundatout.png')"
      },
      animation: {
        'blob': 'blob 7s infinite'
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)'
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)'
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)'
          }
        }
      },
      animationDelay: {
        '2': '2s',
        '4': '4s',
        '6': '6s',
        '8': '8s'
      }
    }
  },
  plugins: [
    function({ addUtilities, addComponents }) {
      addUtilities({
        '.animation-delay-2': {
          'animation-delay': '2s'
        },
        '.animation-delay-4': {
          'animation-delay': '4s'
        },
        '.animation-delay-6': {
          'animation-delay': '6s'
        },
        '.animation-delay-8': {
          'animation-delay': '8s'
        }
      });

      addComponents({
        '.nav-underline': {
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '0',
            bottom: '-4px',
            height: '2px',
            width: '0',
            backgroundColor: '#aa1520',
            transition: 'width 0.3s ease'
          },
          '&:hover::after': {
            width: '100%'
          }
        },
        '.glass-card': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: '1.5px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)',
            borderRadius: '18px',
            pointerEvents: 'none',
            zIndex: '10'
          },
          '& > *': {
            position: 'relative',
            zIndex: '20'
          }
        },
        '.overlay-hero': {
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'rgba(248, 250, 252, 0.7)',
            zIndex: '10'
          }
        },
        '.overlay-services': {
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%)',
            zIndex: '10'
          }
        },
        '.overlay-content > *': {
          position: 'relative',
          zIndex: '20'
        },
        '.form-input': {
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(15px)',
          border: '1.5px solid rgba(255, 255, 255, 0.4)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
          '&:focus': {
            background: 'rgba(255, 255, 255, 0.95)',
            borderColor: '#aa1520',
            boxShadow: '0 0 0 3px rgba(170, 21, 32, 0.1), 0 6px 20px rgba(170, 21, 32, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            outline: 'none',
            transform: 'translateY(-1px)'
          }
        }
      })
    }
  ]
}
