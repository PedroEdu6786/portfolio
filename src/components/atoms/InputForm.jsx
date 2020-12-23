import React from 'react'
import { Input } from '@chakra-ui/react'

const InputForm = ({ id, type, placeholder }) => {
  return (
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      bg="portfolio.lightBlue"
      variant="filled"
    />
  )
}

export default InputForm
