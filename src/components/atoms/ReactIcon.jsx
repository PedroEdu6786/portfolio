import React from 'react'
import { Icon } from '@chakra-ui/react'
import { togglePrimaryValue } from '../../utils/color-mode'

const ReactIcon = ({ icon, ...rest }) => {
  const COLOR = togglePrimaryValue()
  return <Icon as={icon} color={COLOR} {...rest} />
}

export default ReactIcon
