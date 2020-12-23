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
      borderColor: 'portfolio.blue',
    },
    solid: {
      bg: 'portfolio.blue',
      color: 'portfolio.white',
      border: '2px solid',
      borderColor: 'portfolio.blue',
    },
  },

  // The default size and variant values
  defaultProps: {
    variant: 'solid',
  },
}
