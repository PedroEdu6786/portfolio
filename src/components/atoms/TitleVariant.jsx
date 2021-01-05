import React from 'react'
import { Box } from '@chakra-ui/react'
import { togglePrimaryValue } from '../../utils/color-mode'

const TitleVariant = ({ children, ...rest }) => {
  const COLOR = togglePrimaryValue()

  return (
    <Box as="span" color={COLOR} {...rest}>
      {children}
    </Box>
  )
}

export default TitleVariant
