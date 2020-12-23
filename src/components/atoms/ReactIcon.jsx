import React from 'react'
import { Icon } from '@chakra-ui/react'

const BLACK = 'portfolio.black'

const ReactIcon = ({ icon, ...rest }) => {
  return <Icon as={icon} color={BLACK} {...rest} />
}

export default ReactIcon
