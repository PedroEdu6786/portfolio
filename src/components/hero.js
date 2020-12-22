import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Container,
  HStack,
} from '@chakra-ui/react'
import { Image as ImageC } from '@chakra-ui/react'
import { IoIosArrowForward } from 'react-icons/io'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Hero = () => {
  return (
    <Box mt="2rem" p={7} pb="12rem" pos="relative" overflow="hidden">
      <Box>
        <ImageC
          boxSize="300px"
          pos="absolute"
          src="/blob.svg"
          alt="blob"
          bottom="-7"
          right="0"
          mr="-4rem"
        />
        <ImageC
          pos="absolute"
          htmlHeight="350px"
          htmlWidth="250px"
          bottom="-7"
          right="0"
          src="/hero-img.png"
          mr="-4rem"
        />
      </Box>
      <Box>
        <Heading as="h1" size="2xl">
          I develop{' '}
          <Box as="span" color="portfolio.blue">
            dreams
          </Box>{' '}
          and{' '}
          <Box as="span" color="portfolio.blue">
            smiles
          </Box>
        </Heading>
        <Text lineHeight="1.25rem" mt={3}>
          Software Engineer, Front-End Developer, Laugh machine
        </Text>
      </Box>
      <Container pt={4} px={0} mx={0} w="11rem">
        <Button
          fontSize="1rem"
          py={6}
          w="100%"
          bg="portfolio.blue"
          color="portfolio.white"
        >
          Download my CV
        </Button>
        <Button
          fontSize="1rem"
          py={6}
          w="100%"
          bg="none"
          border="2px"
          borderColor="portfolio.blue"
          mt={2}
          fontWeight="bold"
        >
          Change mood
        </Button>
      </Container>
      <HStack
        mt="1rem"
        pos="absolute"
        bottom="0"
        fontWeight="bold"
        fontSize="xl"
      >
        <AiFillGithub color="#242323" />
        <FaLinkedinIn color="#242323" />
        <FaInstagram color="#242323" />
      </HStack>
    </Box>
  )
}

export default Hero
