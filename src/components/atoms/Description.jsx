import React from 'react'
import { Text } from '@chakra-ui/react'

const Description = ({ children, ...rest }) => {
  return (
    <Text fontSize={{ base: 'lg', lg: '2xl' }} lineHeight="shorter" {...rest}>
      {children}
    </Text>
  )
}

export default Description
