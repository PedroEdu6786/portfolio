import React from 'react'
import { Textarea } from '@chakra-ui/react'
import { LIGHT_BLUE } from '../../utils/colors'

const AreaForm = ({ placeholder = "Hey, let's chat", ...rest }) => {
  return <Textarea bg={LIGHT_BLUE} placeholder={placeholder} {...rest} />
}

export default AreaForm
