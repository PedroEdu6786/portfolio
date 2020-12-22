import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react'
import '../styles/global.css'

const theme = extendTheme({
  colors: {
    portfolio: {
      gray: '#EAEAEA',
      white: '#F9F9F9',
      black: '#242323',
      blue: '#6380E8',
      lightBlue: '#E0EAF8',
      red: '#F08080',
      lightRed: '#F8E0E0',
      fontColor: '#242323',
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
