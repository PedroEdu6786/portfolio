import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from '../src/theme/theme'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
