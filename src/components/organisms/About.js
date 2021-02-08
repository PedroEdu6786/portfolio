import React from 'react'
import { useColorMode } from '@chakra-ui/react'
import { Flex, Stack, Image } from '@chakra-ui/react'
import SectionTitle from '../molecules/SectionTitle'
import BlobAbout from '../atoms/BlobAbout'
import { bluePictures, redPictures } from '../../utils/pictures'
import Description from '../atoms/Description'

const About = () => {
  const { colorMode } = useColorMode()

  const getRandomPicture = (pictures) => {
    let randomNumber = Math.floor(Math.random() * bluePictures.length)
    return pictures[randomNumber]
  }

  return (
    <Stack
      direction={{ base: 'column', md: 'row-reverse' }}
      spacing={8}
      justify={{ md: 'space-between' }}
    >
      {/*-------------- PICTURES -------------- */}
      <Flex pos="relative" justify="center">
        <BlobAbout />
        <Image
          zIndex="2"
          pos="relative"
          maxW={{ base: '250px', md: '300px', lg: '350px' }}
          src={
            colorMode === 'light'
              ? getRandomPicture(bluePictures)
              : getRandomPicture(redPictures)
          }
        />
      </Flex>

      {/*-------------- DESCRIPTION -------------- */}
      <Stack justify="center" spacing={8} maxW={{ md: '450px' }}>
        <SectionTitle
          heading="In need of a software engineer? I’m your guy"
          shadow="About Me"
          description="I provide smart, clean and simple solutions, to improve the user’s
        experience and the client’s wishes."
        />
        <Description>
          20 year old pal looking for ways to improve as a person and explore
          new and exciting things
        </Description>
      </Stack>
    </Stack>
  )
}

export default About
