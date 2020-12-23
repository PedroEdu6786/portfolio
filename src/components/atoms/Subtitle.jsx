import React from 'react'
import { Heading } from '@chakra-ui/react'

const Subtitle = ({ children, ...rest }) => {
  return (
    <Heading as="h2" fontSize="4xl" {...rest}>
      {children}
    </Heading>
  )
}

export default Subtitle
