import React from 'react'
import { Heading } from '@chakra-ui/react'
import { WHITE } from '../../utils/colors'

const CardTitle = ({ children, ...rest }) => {
  return (
    <Heading size="lg" fontWeight="semibold" color={WHITE} {...rest}>
      {children}
    </Heading>
  )
}

export default CardTitle
