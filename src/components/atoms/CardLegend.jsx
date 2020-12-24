import React from 'react'
import { Text } from '@chakra-ui/react'
import { WHITE } from '../../utils/colors'

const CardLegend = ({ children, ...rest }) => {
  return (
    <Text color={WHITE} {...rest}>
      {children}
    </Text>
  )
}

export default CardLegend
