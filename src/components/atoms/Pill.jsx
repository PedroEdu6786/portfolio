import React from 'react'
import PropTypes from 'prop-types'
import { WrapItem, Text } from '@chakra-ui/react'
import { toggleLightValue } from '../../utils/colorMode'

const Pill = ({ skill, ...rest }) => {
  const COLOR = toggleLightValue()

  return (
    <WrapItem {...rest}>
      <Text fontSize=".85rem" bg={COLOR} borderRadius={15} p={1} px={3}>
        {skill}
      </Text>
    </WrapItem>
  )
}

Pill.propTypes = {
  key: PropTypes.number,
  skill: PropTypes.string.isRequired,
}

export default Pill
