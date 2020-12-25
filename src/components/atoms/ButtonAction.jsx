import React from 'react'
import styled from '@emotion/styled'
import { Button } from '@chakra-ui/react'

const ButtonStyled = styled(Button)`
  &:hover,
  &:focus {
    transition: 0.1s;
    opacity: 0.9;
  }
`

const ButtonAction = ({ children, ...rest }) => {
  return (
    <Button fontSize={{ base: 'md', md: 'lg' }} {...rest}>
      {children}
    </Button>
  )
}

export default ButtonAction
