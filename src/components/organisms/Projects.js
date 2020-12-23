import React from 'react'
import { Flex, HStack, Stack } from '@chakra-ui/react'
import ProjectCard from '../molecules/ProjectCard.jsx'
import SectionTitle from '../molecules/SectionTitle'
import { projects } from '../../utils/projects'

const Projects = () => {
  return (
    <>
      {/*-------------- DESCRIPTION -------------- */}
      <Stack mx={{ base: 6, md: 10 }} spacing={6}>
        <SectionTitle
          heading="My Work"
          shadow="Projects"
          description="Here is a list of projects I have developed"
        />
      </Stack>

      {/*-------------- PROJECTS -------------- */}
      <Flex px={{ base: 6, md: 10 }} flex="1" overflow="auto">
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
