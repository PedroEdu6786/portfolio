import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { theme, breakpoints } from '../src/utils/theme'
import '../styles/global.css'

const newBreakpoints = createBreakpoints(breakpoints)
const newTheme = extendTheme({ ...theme, ...newBreakpoints })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={newTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
