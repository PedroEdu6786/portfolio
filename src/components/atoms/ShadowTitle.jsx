import React from 'react'
import { Heading } from '@chakra-ui/react'

const ShadowTitle = ({ children, ...rest }) => {
  return (
    <Heading
      pos="absolute"
      fontSize="7rem"
      opacity=".1"
      color="portfolio.blue"
      {...rest}
    >
      {children}
    </Heading>
  )
}

export default ShadowTitle
