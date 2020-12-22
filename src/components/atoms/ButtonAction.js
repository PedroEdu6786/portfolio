import React from 'react'
import { Button } from '@chakra-ui/react'

const ButtonAction = ({ children, primary }) => {
  return (
    <Button colorScheme="teal" variant={primary ? 'solid' : 'outline'}>
      {children}
    </Button>
  )
}

export default ButtonAction
