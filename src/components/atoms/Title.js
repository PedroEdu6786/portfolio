import React from 'react'
import { Heading } from '@chakra-ui/react'

const Title = ({ children }) => {
  return (
    <Heading as="h1" size="2xl">
      {children}
    </Heading>
  )
}

export default Title
