import React from 'react'
import { Heading } from '@chakra-ui/react'

const CardTitle = ({ children, ...rest }) => {
  return (
    <Heading size="lg" fontWeight="semibold" color="portfolio.white" {...rest}>
      {children}
    </Heading>
  )
}

export default CardTitle
