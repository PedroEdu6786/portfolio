import React from 'react'
import { Stack, Center } from '@chakra-ui/react'
import { BLACK, LIGHT_BLUE } from '../../utils/colors'
import { toggleLightValue } from '../../utils/colorMode'
import SocialMedia from '../molecules/SocialMedia'

const Footer = () => {
  const COLOR = toggleLightValue()
  return (
    <Stack bgColor={BLACK} p={5} w="100%">
      <Center textAlign="center" fontWeight="semibold" color={COLOR}>
        Made with love by Pedro Cruz
      </Center>
      <Center>
        <Stack direction="row">
          <SocialMedia color={COLOR} />
        </Stack>
      </Center>
    </Stack>
  )
}

export default Footer
