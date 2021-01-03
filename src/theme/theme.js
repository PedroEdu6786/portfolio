import { extendTheme } from '@chakra-ui/react'

import { Button } from './components/button'
import { styles } from './styles'
import { colors } from './foundations/colors'
import { fonts } from './foundations/fonts'

const theme = {
  styles,
  colors,
  fonts,
  components: {
    Button,
  },
}

export default extendTheme(theme)
