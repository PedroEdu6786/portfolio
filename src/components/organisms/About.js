import React from 'react'
import { useColorMode } from '@chakra-ui/react'
import { Flex, Stack, Image } from '@chakra-ui/react'
import SectionTitle from '../molecules/SectionTitle'
import BlobAbout from '../atoms/BlobAbout'
import { bluePictures, redPictures } from '../../utils/pictures'
import Description from '../atoms/Description'

const About = ({ about }) => {
  const { colorMode } = useColorMode()

  const { about_me_title, content, description } = about[0].data
  const { text: title } = about_me_title[0]

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
          heading={title}
          shadow="About Me"
          description={description}
        />
        <Description>{content}</Description>
      </Stack>
    </Stack>
  )
}

export default About
