import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
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
    space: {
      1: '5px',
      2: '10px',
      3: '15px'
    },
    fontSizes: {
      1: '0.75rem',
      2: '0.875rem',
      3: '1rem',
      4: '1.125rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '2rem',
      8: '3rem',
      9: '4.5rem'
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace'
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {}
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)'
  },
  utils: {
    // * An abbreviated properties for margin
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value
    }),
    mt: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value
    }),
    mr: (value: Stitches.PropertyValue<'margin'>) => ({
      marginRight: value
    }),
    mb: (value: Stitches.PropertyValue<'margin'>) => ({
      marginBottom: value
    }),
    ml: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value
    }),
    mx: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value
    }),
    // * An abbreviated properties for padding
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value
    }),
    pt: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value
    }),
    pr: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingRight: value
    }),
    pb: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingBottom: value
    }),
    pl: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value
    }),
    px: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    // * An abbreviated property for border-radius
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value
    })
  }
})

const globalStyles = globalCss({
  body: { margin: 0, padding: 0 }
})

globalStyles()
