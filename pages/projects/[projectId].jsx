import { useRouter } from 'next/router'
import { Box, Stack, Wrap } from '@chakra-ui/react'
import { projects } from '../../src/utils/projects'
import { BoxMotion } from '../../src/motion/components/BoxMotion'
import { StackMotion } from '../../src/motion/components/StackMotion'
import Subtitle from '../../src/components/atoms/Subtitle'
import { containerProject } from '../../src/motion/variants/container'
import Pill from '../../src/components/atoms/Pill'
import ProjectInfo from '../../src/components/molecules/ProjectInfo'
import ProjectBanner from '../../src/components/molecules/ProjectBanner'

const ProjectPage = () => {
  const router = useRouter()
  const { projectId } = router.query
  const projectData = projects.find((project) => project.id == projectId)

  return (
    <>
      {projectId && (
        <BoxMotion
          animate={{ scale: 1, y: 0 }}
          layoutId={projectData.id}
          overflow="hidden"
        >
          {/* Page banner */}
          <ProjectBanner title={projectData.title} img={projectData.img} />

          {/* Page Info */}
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
              <ProjectInfo
                title="Overview"
                description={projectData.description}
              />
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
                <Wrap spacing={2}>
                  {projectData.technologies.map((technology, key) => (
                    <Box key={key}>
                      <Pill skill={technology} />
                    </Box>
                  ))}
                </Wrap>
              </Box>
            </Stack>

            {/* More Info */}
            <Stack justify="flex-start" direction={['column', 'row']}>
              <ProjectInfo title="My Role" description={projectData.role} />
            </Stack>

            <Stack justify="flex-start" direction={['column', 'row']}>
              <ProjectInfo
                title="The Challenge"
                description={projectData.challenge}
              />
            </Stack>

            <Stack justify="flex-start" direction={['column', 'row']}>
              <ProjectInfo
                title="The Solution"
                description={projectData.solution}
              />
            </Stack>
          </StackMotion>
        </BoxMotion>
      )}
    </>
  )
}

export default ProjectPage
