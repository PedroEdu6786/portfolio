import { WHITE, BLACK } from '../../utils/colors'

import {
  colorChangePrimary,
  colorChangeLight,
  colorChangeDark,
} from '../../utils/colorSwitch'

export const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'semibold',
    fontSize: '1rem',
    paddingY: '1.5rem',
  },

  // Two variants: outline and solid
  variants: {
    outline: (props) => ({
      color: BLACK,
      border: '2px solid',
      borderColor: colorChangePrimary(props),
      _hover: {
        borderColor: colorChangeDark(props),
        bg: colorChangeLight(props),
      },
      _focus: {
        borderColor: colorChangeDark(props),
        bg: colorChangeLight(props),
      },
    }),
    solid: (props) => ({
      bg: colorChangePrimary(props),
      color: WHITE,
      border: '2px solid',
      borderColor: colorChangePrimary(props),
      _hover: {
        bg: colorChangeDark(props),
        borderColor: colorChangeDark(props),
      },
      _focus: {
        bg: colorChangeDark(props),
        borderColor: colorChangeDark(props),
      },
    }),
  },
}
