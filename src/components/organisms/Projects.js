import React from 'react'
import { Flex, HStack, Stack } from '@chakra-ui/react'
import ProjectCard from '../molecules/ProjectCard.jsx'
import SectionTitle from '../molecules/SectionTitle'
import { projects } from '../../utils/projects'

const Projects = () => {
  return (
    <>
      <Stack mx={6} spacing={6}>
        <SectionTitle
          heading="My Work"
          shadow="Projects"
          description="Here is a list of projects I have developed"
        />
      </Stack>
      <Flex px={6} flex="1" overflow="auto">
        <HStack h="26rem" minH="min-content" spacing={5}>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </HStack>
      </Flex>
    </>
  )
}

export default Projects
