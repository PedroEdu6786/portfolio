import React from 'react'
import { Flex, Stack, Heading, Text, Image } from '@chakra-ui/react'
import ButtonAction from '../atoms/ButtonAction'
import SectionTitle from '../molecules/SectionTitle'

const About = () => {
  return (
    <Stack spacing={8}>
      <Flex pos="relative" justify="center">
        <Image
          zIndex="0"
          boxSize="300px"
          pos="absolute"
          bottom="0"
          src="/blob.svg"
          alt="blob"
        />
        <Image
          zIndex="2"
          pos="relative"
          htmlHeight="300px"
          htmlWidth="220px"
          src="/hero-img.png"
        />
      </Flex>
      <SectionTitle
        heading="In need of a software engineer? I’m your guy"
        shadow="About Me"
        description="I provide smart, clean and simple solutions, to improve the user’s
        experience and the client’s wishes."
      />
      <ButtonAction>Learn more about me</ButtonAction>
    </Stack>
  )
}

export default About
