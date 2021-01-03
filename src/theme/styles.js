import { mode } from '@chakra-ui/theme-tools'
import { BLACK } from '../utils/colors'

export const styles = {
  global: (props) => ({
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      color: BLACK,
      bg: '#F9F9F9',
    },
    '*::placeholder': {
      color: mode('portfolio.blue', 'portfolio.red')(props),
    },
  }),
}
