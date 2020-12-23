import React from 'react'
import { Heading } from '@chakra-ui/react'

const Title = ({ children, ...rest }) => {
  return (
    <Heading as="h1" size="2xl" {...rest}>
      {children}
    </Heading>
  )
}

export default Title
