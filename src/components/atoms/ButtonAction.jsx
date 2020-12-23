import React from 'react'
import { Button } from '@chakra-ui/react'

const ButtonAction = ({ children, ...rest }) => {
  return (
    <Button _hover={{ opacity: '.8' }} _focus={{ opacity: '.8' }} {...rest}>
      {children}
    </Button>
  )
}

export default ButtonAction
