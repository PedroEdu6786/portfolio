import React from 'react'
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

export default SectionTitle
