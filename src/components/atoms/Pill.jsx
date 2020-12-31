import React from 'react'
import { WrapItem, Text } from '@chakra-ui/react'
import { toggleLightValue } from '../../utils/colorMode'

const Pill = ({ key, skill, ...rest }) => {
  const COLOR = toggleLightValue()

  return (
    <WrapItem key={key} {...rest}>
      <Text fontSize=".85rem" bg={COLOR} borderRadius={15} p={1} px={3}>
        {skill}
      </Text>
    </WrapItem>
  )
}

export default Pill
