import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react'
import theme from '../src/utils/theme'
import '../styles/global.css'

const newTheme = extendTheme(theme)

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={newTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
