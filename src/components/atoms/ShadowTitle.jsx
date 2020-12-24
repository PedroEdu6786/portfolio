import React from 'react'
import { Heading } from '@chakra-ui/react'
import { BLUE } from '../../utils/colors'

const ShadowTitle = ({ children, ...rest }) => {
  return (
    <Heading pos="absolute" fontSize="7rem" opacity=".1" color={BLUE} {...rest}>
      {children}
    </Heading>
  )
}

export default ShadowTitle
