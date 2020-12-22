import React from 'react'
import {
  Box,
  Heading,
  Text,
  Link as LinkC,
  ExternalLinkIcon,
} from '@chakra-ui/react'

const ProjectCard = () => {
  return (
    <Box
      bgImage="url('/project.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="14rem"
      h="22rem"
      borderRadius=".5rem"
      pos="relative"
      overflow="hidden"
      boxShadow="xl"
    >
      <Box pos="absolute" height="100%" zIndex="2" p={5}>
        <Text color="portfolio.white">Front-End</Text>
        <Heading size="lg" color="portfolio.white">
          Lorem ipsum dolor sit amet
        </Heading>
        <LinkC
          pos="absolute"
          bottom="0"
          pb={5}
          color="portfolio.white"
          href="#"
        >
          See more
          {/* <ExternalLinkIcon mx="2px" /> */}
        </LinkC>
      </Box>
      <Box
        bgColor="portfolio.black"
        h="100%"
        w="100%"
        opacity="0.4"
        pos="absolute"
      ></Box>
    </Box>
  )
}

export default ProjectCard
