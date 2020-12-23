import React from 'react'
import { Box, Stack, Image } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import ButtonAction from '../atoms/ButtonAction'
import TitleVariant from '../atoms/TitleVariant'
import Title from '../atoms/Title'
import Description from '../atoms/Description'
import ReactIcon from '../atoms/ReactIcon'

const Hero = () => {
  return (
    <Box>
      {/*-------------- PICTURES -------------- */}
      <Box>
        <Image
          mr={{ base: '-4rem', md: '0' }}
          pos="absolute"
          bottom="-7"
          right="0"
          boxSize={{ base: '300px', md: '325px', lg: '350px' }}
          src="/blob.svg"
          alt="blob"
        />
        <Image
          mr={{ base: '-4rem', md: '0' }}
          pos="absolute"
          bottom="-7"
          right="0"
          maxW={{ base: '250px', md: '275px', lg: '300px' }}
          src="/hero-img.png"
          alt="It'sMe"
        />
      </Box>

      <Stack spacing={{ base: 4, md: 8 }}>
        {/*-------------- HEADINGS -------------- */}
        <Stack maxW="500px" spacing={{ base: 4, md: 8 }}>
          <Title>
            I develop <TitleVariant>dreams</TitleVariant> and{' '}
            <TitleVariant>smiles</TitleVariant>
          </Title>
          <Description>
            Software Engineer, Front-End Developer, Laugh machine
          </Description>
        </Stack>

        {/*-------------- BUTTONS -------------- */}
        <Stack align="center" direction={['column', 'row']}>
          <ButtonAction display="flex" variant="solid" maxW="11rem">
            Download my CV
          </ButtonAction>
          <ButtonAction display="flex" variant="outline" maxW="11rem">
            Change mood
          </ButtonAction>
        </Stack>
      </Stack>

      {/*-------------- SOCIAL MEDIA -------------- */}
      <Stack
        pos="absolute"
        bottom="0"
        fontWeight="bold"
        fontSize="xl"
        direction={{ base: 'column', md: 'row' }}
      >
        <ReactIcon fontSize="1.6rem" icon={AiFillGithub} />
        <ReactIcon fontSize="1.6rem" icon={FaLinkedinIn} />
        <ReactIcon fontSize="1.6rem" icon={FaInstagram} />
      </Stack>
    </Box>
  )
}

export default Hero
