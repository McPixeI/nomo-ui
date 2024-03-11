export const keyframes = {
  slideDown: {
    '0%': { transform: 'translateY(-50px)', opacity: 0 },
    '100%': { transform: 'translateY(0px)', opacity: 1 }
  },
  showMenu: {
    '0%': {
      opacity: 0,
      transform: 'scale(0)'
    },
    '50%': {
      opacity: 0.3
    },
    '100%': {
      opacity: 1,
      transform: 'scale(1)'
    }
  },
  fade: {
    '0%': {
      opacity: 0,
      transform: 'translateY(-15px)'
    },
    '50%': {
      opacity: 0.3,
      transform: 'translateY(-15px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0px)'
    }
  },
  leftFade: {
    '0%': {
      opacity: 0,
      transform: 'translateX(15px)'
    },
    '50%': {
      opacity: 0.3,
      transform: 'translateX(15px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0px)'
    }
  },
  infiniteRotate: {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  }
}