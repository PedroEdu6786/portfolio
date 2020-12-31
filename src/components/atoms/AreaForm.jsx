import React from 'react'
import { Textarea } from '@chakra-ui/react'
import { toggleLightValue } from '../../utils/colorMode'

const AreaForm = ({ placeholder = "Hey, let's chat", ...rest }) => {
  const COLOR = toggleLightValue()
  return <Textarea bg={COLOR} placeholder={placeholder} {...rest} />
}

export default AreaForm
