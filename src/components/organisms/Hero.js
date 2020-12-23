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
      {/*-------------- Pictures -------------- */}
      <Box>
        <Image
          mr="-4rem"
          pos="absolute"
          bottom="-7"
          right="0"
          boxSize="300px"
          src="/blob.svg"
          alt="blob"
        />
        <Image
          mr="-4rem"
          pos="absolute"
          bottom="-7"
          right="0"
          htmlHeight="350px"
          htmlWidth="250px"
          src="/hero-img.png"
          alt="It'sMe"
        />
      </Box>

      <Stack spacing={4}>
        {/*-------------- HEADINGS -------------- */}
        <Stack>
          <Title>
            I develop <TitleVariant>dreams</TitleVariant> and{' '}
            <TitleVariant>smiles</TitleVariant>
          </Title>
          <Description>
            Software Engineer, Front-End Developer, Laugh machine
          </Description>
        </Stack>

        {/*-------------- BUTTONS -------------- */}
        <Stack w="11rem">
          <ButtonAction variant="solid">Download my CV</ButtonAction>
          <ButtonAction variant="outline">Change mood</ButtonAction>
        </Stack>
      </Stack>

      {/*-------------- SOCIAL MEDIA -------------- */}
      <Stack pos="absolute" bottom="0" fontWeight="bold" fontSize="xl">
        <ReactIcon icon={AiFillGithub} />
        <ReactIcon icon={FaLinkedinIn} />
        <ReactIcon icon={FaInstagram} />
      </Stack>
    </Box>
  )
}

export default Hero
