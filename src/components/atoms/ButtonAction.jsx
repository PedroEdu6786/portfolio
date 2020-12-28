import React from 'react'
import { Button } from '@chakra-ui/react'

const ButtonAction = ({ children, primary, ...rest }) => {
  return (
    <Button
      variant={primary ? 'solid' : 'outline'}
      fontSize={{ base: 'md', md: 'lg' }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default ButtonAction
