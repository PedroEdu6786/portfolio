import React from 'react'
import { Box, Flex, Heading, Text, Container, Spacer } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <Box>
      <Container p={7}>
        <Flex align="center">
          <Heading pt={5} as="h2" fontSize="2.25rem">
            My Work
          </Heading>
          <Heading
            pos="absolute"
            fontSize="7rem"
            opacity=".1"
            color="portfolio.blue"
          >
            Projects
          </Heading>
        </Flex>
        <Text pt={8}>Here is a list of projects I have developed</Text>
      </Container>
      <Flex pl={7} flex="1" mt={6} overflow="auto">
        <Flex h="24rem" minH="min-content">
          <ProjectCard />
          <Spacer ml="1.25rem" />
          <ProjectCard />
          <Spacer ml="1.25rem" />
          <ProjectCard />
          <Spacer ml="1.25rem" />
          <ProjectCard />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Projects
