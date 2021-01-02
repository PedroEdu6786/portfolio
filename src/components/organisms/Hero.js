import React from 'react'
import { Box, Stack, useColorMode } from '@chakra-ui/react'
import SocialMedia from '../molecules/SocialMedia'
import Title from '../atoms/Title'
import TitleVariant from '../atoms/TitleVariant'
import Description from '../atoms/Description'
import ButtonAction from '../atoms/ButtonAction'
import HeroImage from '../atoms/HeroImage'
import BlobHero from '../atoms/BlobHero'

const Hero = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const downloadCv = () => {
    window.open('/files/CV.pdf')
  }

  return (
    <Box>
      {/*-------------- PICTURES -------------- */}
      <Box>
        <BlobHero />
        <HeroImage src="/images/hero-img.png" alt="It'sMe" />
      </Box>

      <Stack spacing={8} pos="relative" zIndex="1">
        {/*-------------- HEADINGS -------------- */}
        <Stack
          maxW={{ base: '500px', lg: '600px' }}
          pt={{ md: '8vh' }}
          spacing={{ base: 4, md: 8 }}
        >
          <Title>
            I develop <TitleVariant>dreams</TitleVariant> and{' '}
            <TitleVariant>smiles</TitleVariant>
          </Title>
          <Description>
            Software Engineer, Front-End Developer, Laugh machine
          </Description>
        </Stack>

        {/*-------------- BUTTONS -------------- */}
        <Stack direction={['column', 'row']}>
          <ButtonAction
            primary
            display="flex"
            maxW="12rem"
            onClick={downloadCv}
          >
            Download my CV
          </ButtonAction>
          <ButtonAction
            display="flex"
            variant="outline"
            maxW="12rem"
            onClick={toggleColorMode}
          >
            Change mood
          </ButtonAction>
        </Stack>
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
