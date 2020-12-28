import { extendTheme } from '@chakra-ui/react'

import { Button } from './components/button'
import { styles } from './styles'
import { colors } from './foundations/colors'

const theme = {
  styles,
  colors,
  components: {
    Button,
  },
}

export default extendTheme(theme)
