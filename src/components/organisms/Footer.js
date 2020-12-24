import React from 'react'
import { Stack, Center } from '@chakra-ui/react'
import { BLACK, LIGHT_BLUE } from '../../utils/colors'
import SocialMedia from '../molecules/SocialMedia'

const Footer = () => {
  return (
    <Stack bgColor={BLACK} p={5} w="100%">
      <Center textAlign="center" fontWeight="semibold" color={LIGHT_BLUE}>
        Made with love by Pedro Cruz
      </Center>
      <Center>
        <SocialMedia m={1} color={LIGHT_BLUE} />
      </Center>
    </Stack>
  )
}

export default Footer
