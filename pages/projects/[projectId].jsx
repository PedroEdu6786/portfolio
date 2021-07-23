import { Box, Stack, Wrap } from '@chakra-ui/react'
import { BoxMotion } from '../../src/motion/components/BoxMotion'
import { StackMotion } from '../../src/motion/components/StackMotion'
import Subtitle from '../../src/components/atoms/Subtitle'
import { containerProject } from '../../src/motion/variants/container'
import Pill from '../../src/components/atoms/Pill'
import ProjectInfo from '../../src/components/molecules/ProjectInfo'
import ProjectBanner from '../../src/components/molecules/ProjectBanner'
import { Client } from '../../src/utils/prismic-configuration'
import Prismic from 'prismic-javascript'

const ProjectPage = ({ uid, data }) => {
  const {
    project_title,
    project_role,
    project_image,
    role_description,
    overview,
    challenge,
    solution,
    technologies,
  } = data

  const title = project_title[0].text
  const img = project_image.url

  return (
    <>
      {uid && (
        <BoxMotion
          animate={{ scale: 1, y: 0 }}
          layoutId={uid}
          overflow="hidden"
        >
          {/* Page banner */}
          <ProjectBanner title={title} img={img} />

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
              <ProjectInfo title="Overview" description={overview} />
            </Box>

            {/* My Stack */}
            <Stack
              direction={['column', 'row']}
              justify="space-between"
              spacing="3rem"
            >
              <Box>
                <ProjectInfo title="Focus" description={project_role} />
              </Box>
              <Box>
                <Subtitle fontSize="2rem" pb=".5rem">
                  Technologies used
                </Subtitle>
                <Wrap spacing={2}>
                  {technologies.map((technology, key) => (
                    <Box key={key}>
                      <Pill skill={technology.tech_name} />
                    </Box>
                  ))}
                </Wrap>
              </Box>
            </Stack>

            {/* More Info */}
            <Stack justify="flex-start" direction={['column', 'row']}>
              <ProjectInfo title="My Role" description={role_description} />
            </Stack>

            <Stack justify="flex-start" direction={['column', 'row']}>
              <ProjectInfo title="The Challenge" description={challenge} />
            </Stack>

            <Stack justify="flex-start" direction={['column', 'row']}>
              <ProjectInfo title="The Solution" description={solution} />
            </Stack>
          </StackMotion>
        </BoxMotion>
      )}
    </>
  )
}

export async function getStaticPaths() {
  const projects = await Client().query(
    Prismic.Predicates.at('document.type', 'project')
  )

  const projectList = projects.results

  const paths = projectList.map((project) => ({
    params: { projectId: project.uid },
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const projects = await Client().query(
    Prismic.Predicates.at('document.type', 'project')
  )

  const listOfProjects = projects.results

  const project = listOfProjects.find((project) => {
    return project.uid === params.projectId
  })

  return {
    props: {
      ...project,
    },
    revalidate: 60,
  }
}

export default ProjectPage
