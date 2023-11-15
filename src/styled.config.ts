const theme = {
  colors: {
    white: '#fff',
    gray900: 'hsl(240,1%,13%)',
    gray500: 'hsl(206,10%,76%)',
    blue500: 'hsl(206,100%,50%)',
    purple500: 'hsl(252,78%,60%)',
    green500: 'hsl(148,60%,60%)',
    red500: 'hsl(352,100%,62%)',
    gradientBlueToGray:
          'linear-gradient(0deg, rgba(30, 30, 30, 0.5) 0%, rgba(50, 86, 96, 0.8) 33.85%, #428293 62.5%, rgba(97, 218, 251, 0.75) 100%)',
    gradientButton:
          'linear-gradient(180deg, rgb(97, 218, 251) 3.35%, rgba(97, 218, 251, 0.22) 100.65%)'
  },
  fonts: {
    untitled: 'Untitled Sans, apple-system, sans-serif',
    mono: 'Söhne Mono, menlo, monospace'
  },
  space: {
    1: '0.3rem',
    2: '0.5rem',
    3: '0.8rem',
    4: '1rem',
    5: '1.5rem',
    6: '2rem',
    7: '3rem',
    8: '4rem',
    9: '4.5rem'
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '4rem'
  },
  fontWeights: {
    normal: 400,
    bold: 700
  },
  lineHeights: {
    normal: 1.5,
    heading: 1.2
  },
  mediaQueries: {
    sm: '@media (min-width: 640px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)'
  }
}

export default theme
