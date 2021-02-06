import { useRouter } from 'next/router'
import { Box, Stack, Wrap } from '@chakra-ui/react'
import CardTitle from '../../src/components/atoms/CardTitle'
import { projects } from '../../src/utils/projects'
import { BLACK } from '../../src/utils/colors'
import { BoxMotion } from '../../src/motion/components/BoxMotion'
import { StackMotion } from '../../src/motion/components/StackMotion'
import Subtitle from '../../src/components/atoms/Subtitle'
import Description from '../../src/components/atoms/Description'
import { containerProject } from '../../src/motion/variants/container'
import Pill from '../../src/components/atoms/Pill'
import ProjectInfo from '../../src/components/molecules/ProjectInfo'

const ProjectPage = () => {
  const router = useRouter()
  const { projectId } = router.query

  const projectData = projects.find((project) => project.id == projectId)

  return (
    <BoxMotion layoutId={projectData.id} overflow="hidden">
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
        <Box
          bgColor={BLACK}
          h="100%"
          w="100%"
          opacity="0.4"
          pos="absolute"
        ></Box>
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
          <CardTitle fontSize="2.5rem">{projectData.title}</CardTitle>
        </Box>
      </Box>
      <StackMotion
        variants={containerProject}
        initial="hidden"
        animate="show"
        p={{ base: 10, md: '5rem' }}
        mx="auto"
        spacing="3rem"
        maxW="1400px"
      >
        {/* Project Description */}
        <Box>
          <ProjectInfo title="Overview" description={projectData.description} />
        </Box>

        {/* My Stack */}
        <Stack
          direction={['column', 'row']}
          justify="space-between"
          spacing="3rem"
        >
          <Box>
            <ProjectInfo title="Focus" description={projectData.legend} />
          </Box>
          <Box>
            <Subtitle fontSize="2rem" pb=".5rem">
              Technologies used
            </Subtitle>
            <Description maxW="15rem" fontSize="1rem">
              <Wrap spacing={2}>
                {projectData.technologies.map((technology, key) => (
                  <Box key={key}>
                    <Pill skill={technology} />
                  </Box>
                ))}
              </Wrap>
            </Description>
          </Box>
        </Stack>

        {/* More Info */}
        <Stack justify="space-between" direction={['column', 'row']}>
          <ProjectInfo title="My Role" description={projectData.role} />
        </Stack>

        <Stack justify="space-between" direction={['column', 'row']}>
          <ProjectInfo
            title="The Challenge"
            description={projectData.challenge}
          />
        </Stack>

        <Stack justify="space-between" direction={['column', 'row']}>
          <ProjectInfo
            title="The Solution"
            description={projectData.solution}
          />
        </Stack>
      </StackMotion>
    </BoxMotion>
  )
}

export default ProjectPage
