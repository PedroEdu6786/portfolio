import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react'
import CardLegend from '../../src/components/atoms/CardLegend'
import CardTitle from '../../src/components/atoms/CardTitle'
import { projects } from '../../src/utils/projects'
import { BLACK } from '../../src/utils/colors'
import { motion } from 'framer-motion'

const ProjectPage = () => {
  const router = useRouter()
  const { projectId } = router.query

  const projectData = projects.find((project) => project.id == projectId)

  return (
    <motion.div layoutId={projectData.id}>
      <Box
        bgImage="url('/images/project.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w={{ base: '14rem', lg: '16rem' }}
        h={{ base: '22rem', lg: '26rem' }}
        borderRadius=".5rem"
        mt="3rem"
        mr="1rem"
        ml="0"
        pos="relative"
        overflow="hidden"
        boxShadow="lg"
      >
        {/*-------------- CARD CONTENT -------------- */}
        <Box pos="absolute" height="100%" zIndex="2" p={5}>
          <CardLegend>{projectData.legend}</CardLegend>
          <CardTitle>{projectData.title}</CardTitle>
        </Box>

        {/*-------------- CARD FILTER -------------- */}
        <Box
          bgColor={BLACK}
          h="100%"
          w="100%"
          opacity="0.4"
          pos="absolute"
        ></Box>
      </Box>
    </motion.div>
  )
}

export default ProjectPage
