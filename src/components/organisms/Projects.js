import React from 'react'
import { Flex, Stack } from '@chakra-ui/react'
import ProjectCard from '../molecules/ProjectCard'
import SectionTitle from '../molecules/SectionTitle'

const Projects = ({ projects }) => {
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
      <Flex
        mt="2rem"
        py="2rem"
        px={{ base: 6, md: 10 }}
        flex="1"
        overflow="auto"
      >
        <Stack
          direction="horizontal"
          justify="space-evenly"
          h="100%"
          minH="min-content"
          wrap={{ lg: 'wrap' }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Stack>
      </Flex>
    </>
  )
}

export default Projects
