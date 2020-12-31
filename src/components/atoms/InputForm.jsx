import React from 'react'
import { Input } from '@chakra-ui/react'
import { toggleLightValue } from '../../utils/colorMode'

const InputForm = ({ id, type, placeholder, ...rest }) => {
  const COLOR = toggleLightValue()

  return (
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      bg={COLOR}
      variant="filled"
      {...rest}
    />
  )
}

export default InputForm
