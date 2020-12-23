import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image as ImageC,
} from '@chakra-ui/react'
import SectionLayout from './SectionLayout'

const About = () => {
  return (
    <Box bgColor="portfolio.lightBlue" w="100%">
      <SectionLayout>
        <Flex pos="relative" justify="center">
          <ImageC
            zIndex="0"
            boxSize="300px"
            pos="absolute"
            bottom="0"
            src="/blob.svg"
            alt="blob"
          />
          <ImageC
            zIndex="2"
            pos="relative"
            htmlHeight="300px"
            htmlWidth="220px"
            src="/hero-img.png"
          />
        </Flex>
        <Flex align="center" pt="3rem">
          <Heading pt={5} as="h2" fontSize="2.25rem">
            In need of a software engineer? I’m your guy{' '}
          </Heading>
          <Heading
            pos="absolute"
            fontSize="7rem"
            opacity=".1"
            color="portfolio.blue"
          >
            About Me
          </Heading>
        </Flex>
        <Text pt={8} fontSize="1.25rem">
          I provide smart, clean and simple solutions, to improve the user’s
          experience and the client’s wishes.{' '}
        </Text>
        <Button
          fontSize="1rem"
          py={6}
          mt={8}
          w="100%"
          bg="portfolio.blue"
          color="portfolio.white"
        >
          More about me
        </Button>
      </SectionLayout>
    </Box>
  )
}

export default About
