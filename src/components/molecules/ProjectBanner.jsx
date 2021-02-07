import React from 'react'
import { Box, HStack, Link, Text } from '@chakra-ui/react'
import { BLACK, WHITE } from '../../utils/colors'
import CardTitle from '../atoms/CardTitle'
import { BsArrowLeft } from 'react-icons/bs'
import ReactIcon from '../atoms/ReactIcon'
import { Link as LinkC } from 'next/link'

const ProjectBanner = ({ title }) => {
  const goBack = () => history.back()

  return (
    <Box
      bgImage="url('/images/project.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w={{ base: '100vw' }}
      h={{ base: '22rem', lg: '28rem' }}
      pos="relative"
    >
      {/*-------------- CARD FILTER -------------- */}
      <Box bgColor={BLACK} h="100%" w="100%" opacity="0.4" pos="absolute"></Box>
      {/*-------------- CARD CONTENT -------------- */}
      <Box
        mx="auto"
        maxW="1400px"
        pos="relative"
        height="100%"
        zIndex="2"
        p={{ base: 10 }}
        px={{ md: '5rem' }}
      >
        <Link as={LinkC} color={WHITE} onClick={goBack}>
          <a>
            <HStack mb="1rem">
              <ReactIcon fontSize="1.5rem" color={WHITE} icon={BsArrowLeft} />
              <Text color={WHITE} fontWeight="semi" fontSize="1.5rem">
                Go Back
              </Text>
            </HStack>
          </a>
        </Link>
        <CardTitle fontSize="2.5rem">{title}</CardTitle>
      </Box>
    </Box>
  )
}

export default ProjectBanner
