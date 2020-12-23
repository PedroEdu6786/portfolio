import React from 'react'
import { Box, Heading, Text, Button, Stack, HStack } from '@chakra-ui/react'
import { Image as ImageC } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import SectionLayout from './SectionLayout'

const Hero = () => {
  const BLACK = '#242323'
  const BLUE = 'portfolio.blue'
  const WHITE = 'portfolio.white'

  return (
    <SectionLayout mt="2rem" pb="16rem">
      {/*-------------- Pictures -------------- */}
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

      <Stack spacing={4}>
        {/*-------------- HEADINGS -------------- */}
        <Stack>
          <Heading as="h1" size="2xl">
            I develop{' '}
            <Box as="span" color={BLUE}>
              dreams
            </Box>{' '}
            and{' '}
            <Box as="span" color={BLUE}>
              smiles
            </Box>
          </Heading>
          <Text lineHeight="shorter">
            Software Engineer, Front-End Developer, Laugh machine
          </Text>
        </Stack>

        {/*-------------- BUTTONS -------------- */}
        <Stack w="11rem">
          <Button fontSize="1rem" py={6} w="100%" bg={BLUE} color={WHITE}>
            Download my CV
          </Button>
          <Button
            fontSize="1rem"
            py={6}
            w="100%"
            bg="none"
            border="2px"
            borderColor={BLUE}
            fontWeight="bold"
          >
            Change mood
          </Button>
        </Stack>
      </Stack>

      {/*-------------- SOCIAL MEDIA -------------- */}
      <Stack
        ml="1.5rem"
        pos="absolute"
        bottom="0"
        fontWeight="bold"
        fontSize="xl"
      >
        <AiFillGithub color={BLACK} />
        <FaLinkedinIn color={BLACK} />
        <FaInstagram color={BLACK} />
      </Stack>
    </SectionLayout>
  )
}

export default Hero
