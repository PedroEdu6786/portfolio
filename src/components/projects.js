import React from 'react'
import { Flex, Heading, Text, HStack, Stack } from '@chakra-ui/react'
import SectionLayout from './SectionLayout'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <SectionLayout mt="8rem" mb={0} px={0}>
      <Stack mx={6} spacing={6}>
        <Flex align="center">
          <Heading as="h2" fontSize="2.25rem">
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
        <Text>Here is a list of projects I have developed</Text>
      </Stack>
      <Flex px={6} flex="1" overflow="auto">
        <HStack h="26rem" minH="min-content" spacing={5}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </HStack>
      </Flex>
    </SectionLayout>
  )
}

export default Projects
