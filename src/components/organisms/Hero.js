import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import SocialMedia from '../molecules/SocialMedia'
import Headline from '../molecules/Headline'
import HeroImage from '../atoms/HeroImage'
import HeroButton from '../molecules/HeroButton'
import BlobHero from '../atoms/BlobHero'

const Hero = () => {
  return (
    <Box>
      {/*-------------- PICTURES -------------- */}
      <Box>
        <BlobHero />
        <HeroImage src="/images/hero-img.png" alt="It'sMe" />
      </Box>

      <Stack spacing={8} pos="relative" pt={{ md: '8vh' }} zIndex="1">
        {/*-------------- HEADLINE -------------- */}
        <Headline />

        {/*-------------- BUTTONS -------------- */}

        <HeroButton />
      </Stack>

      {/*-------------- SOCIAL MEDIA -------------- */}
      <Stack
        pos={{ base: 'relative', md: 'absolute' }}
        pt="1rem"
        bottom="0"
        fontWeight="bold"
        fontSize="xl"
        direction={{ base: 'column', md: 'row' }}
      >
        <SocialMedia />
      </Stack>
    </Box>
  )
}

export default Hero
