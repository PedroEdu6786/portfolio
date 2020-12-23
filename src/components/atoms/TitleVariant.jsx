import React from 'react'
import { Box } from '@chakra-ui/react'

const BLUE = 'portfolio.blue'

const TitleVariant = ({ children, ...rest }) => {
  return (
    <Box as="span" color={BLUE} {...rest}>
      {children}
    </Box>
  )
}

export default TitleVariant
