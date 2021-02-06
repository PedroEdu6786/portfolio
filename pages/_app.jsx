import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { AnimateSharedLayout } from 'framer-motion'
import theme from '../src/theme/theme'
import Fonts from '../src/theme/components/Fonts'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Fonts />
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ChakraProvider>
  )
}

export default MyApp
