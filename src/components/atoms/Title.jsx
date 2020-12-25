import React from 'react'
import { Heading } from '@chakra-ui/react'

const Title = ({ children, ...rest }) => {
  return (
    <Heading as="h1" fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }} {...rest}>
      {children}
    </Heading>
  )
}

export default Title
