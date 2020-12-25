import React from 'react'
import { Input } from '@chakra-ui/react'
import { LIGHT_BLUE } from '../../utils/colors'

const InputForm = ({ id, type, placeholder, ...rest }) => {
  return (
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      bg={LIGHT_BLUE}
      variant="filled"
      {...rest}
    />
  )
}

export default InputForm
