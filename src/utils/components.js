import { BLUE, WHITE } from './colors'

export const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'semibold',
    fontSize: '1rem',
    paddingY: '1.5rem',
  },

  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: BLUE,
    },
    solid: {
      bg: BLUE,
      color: WHITE,
      border: '2px solid',
      borderColor: BLUE,
    },
  },

  // The default size and variant values
  defaultProps: {
    variant: 'solid',
  },
}
