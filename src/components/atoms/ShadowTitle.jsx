import React from 'react'
import { Heading } from '@chakra-ui/react'
import { togglePrimaryValue } from '../../utils/colorMode'

const ShadowTitle = ({ children, ...rest }) => {
  const COLOR = togglePrimaryValue()

  return (
    <Heading
      pos="absolute"
      fontSize="7rem"
      opacity=".1"
      color={COLOR}
      {...rest}
    >
      {children}
    </Heading>
  )
}

export default ShadowTitle
