import React from 'react'
import { Box, Center } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box bgColor="portfolio.black" p={5} w="100%">
      <Center
        textAlign="center"
        fontWeight="semibold"
        color="portfolio.lightBlue"
      >
        Made with love by Pedro Cruz
      </Center>
    </Box>
  )
}

export default Footer
