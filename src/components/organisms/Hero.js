import React from 'react'
import { Box, Stack, Image } from '@chakra-ui/react'
import ButtonAction from '../atoms/ButtonAction'
import TitleVariant from '../atoms/TitleVariant'
import Title from '../atoms/Title'
import Description from '../atoms/Description'
import SocialMedia from '../molecules/SocialMedia'

const Hero = () => {
  const downloadCv = () => {
    window.open('/files/CV.pdf')
  }

  return (
    <Box>
      {/*-------------- PICTURES -------------- */}
      <Box>
        <Image
          mr={{ base: '-20vw', sm: '-10vw', md: '0' }}
          pos="absolute"
          bottom="-7"
          right="0"
          boxSize={{ base: '300px', md: '325px', lg: '400px' }}
          zIndex="0"
          src="/images/blob.svg"
          alt="blob"
        />
        <Image
          mr={{ base: '-20vw', sm: '-10vw', md: '0' }}
          pos="absolute"
          bottom="-7"
          right="0"
          maxW={{ base: '250px', md: '275px', lg: '350px' }}
          zIndex="0"
          src="/images/hero-img.png"
          alt="It'sMe"
        />
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
            display="flex"
            variant="solid"
            maxW="12rem"
            onClick={downloadCv}
          >
            Download my CV
          </ButtonAction>
          <ButtonAction display="flex" variant="outline" maxW="12rem">
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
