import { BLUE, WHITE, DARK_BLUE, LIGHT_BLUE } from '../../utils/colors'

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
      _hover: {
        borderColor: DARK_BLUE,
        bg: LIGHT_BLUE,
      },
      _focus: {
        borderColor: DARK_BLUE,
        bg: LIGHT_BLUE,
      },
    },
    solid: {
      bg: BLUE,
      color: WHITE,
      border: '2px solid',
      borderColor: BLUE,
      _hover: {
        bg: DARK_BLUE,
        borderColor: DARK_BLUE,
      },
      _focus: {
        bg: DARK_BLUE,
        borderColor: DARK_BLUE,
      },
    },
  },
}
