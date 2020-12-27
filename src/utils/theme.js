import { Button } from './components'
import { WHITE } from './colors'

export const breakpoints = {
  sm: '25em',
  md: '48em',
  lg: '62em',
  xl: '80em',
}

export const theme = {
  styles: {
    global: {
      body: {
        bg: WHITE,
      },
    },
  },
  colors: {
    portfolio: {
      gray: '#EAEAEA',
      white: '#F9F9F9',
      black: '#242323',
      blue: '#6380E8',
      lightBlue: '#E0EAF8',
      red: '#F08080',
      lightRed: '#F8E0E0',
      fontColor: '#242323',
    },
  },
  components: {
    Button,
  },
}
