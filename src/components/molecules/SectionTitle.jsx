import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@chakra-ui/react'
import Subtitle from '../atoms/Subtitle'
import ShadowTitle from '../atoms/ShadowTitle'
import Description from '../atoms/Description'

const SectionTitle = ({ heading, shadow, description }) => {
  return (
    <>
      <Flex align="center">
        <Subtitle>{heading}</Subtitle>
        <ShadowTitle>{shadow}</ShadowTitle>
      </Flex>
      <Description>{description}</Description>
    </>
  )
}

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  shadow: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default SectionTitle
