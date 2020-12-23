import React from 'react'
import { Text } from '@chakra-ui/react'

const CardLegend = ({ children, ...rest }) => {
  return (
    <Text color="portfolio.white" {...rest}>
      {children}
    </Text>
  )
}

export default CardLegend
