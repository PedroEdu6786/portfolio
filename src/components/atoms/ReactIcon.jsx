import React from 'react'
import { Icon } from '@chakra-ui/react'
import { BLACK } from '../../utils/colors'

const ReactIcon = ({ icon, ...rest }) => {
  return <Icon as={icon} color={BLACK} {...rest} />
}

export default ReactIcon
