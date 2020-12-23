import React from 'react'
import { Text } from '@chakra-ui/react'

const Description = ({ children, ...rest }) => {
  return (
    <Text fontSize="1.25rem" lineHeight="shorter" {...rest}>
      {children}
    </Text>
  )
}

export default Description
