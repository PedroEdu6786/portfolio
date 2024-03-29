import React from 'react'
import Link from 'next/link'
import { Box } from '@chakra-ui/react'
import CardTitle from '../atoms/CardTitle'
import CardLegend from '../atoms/CardLegend'
import CardLink from '../atoms/CardLink'
import { BLACK } from '../../utils/colors'
import { BoxMotion } from '../../motion/components/BoxMotion'

const ProjectCard = ({ uid, data }) => {
  const { project_title, project_role, card_image } = data

  const title = project_title[0].text
  const img = card_image.url

  return (
    <Link
      href={`/projects/[projectId]?projectId=${uid}`}
      as={`/projects/${uid}`}
    >
      <BoxMotion
        layoutId={uid}
        transition={{ ease: 'linear' }}
        initial={{ scale: 1, y: 0 }}
        animate={{ scale: 1, y: 0 }}
        whileHover={{
          scale: 1.05,
          y: -10,
          transition: { duration: 0.3 },
        }}
        _hover={{ cursor: 'pointer' }}
      >
        <Box
          bgImage={`url(${img})`}
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
            <CardLegend>{project_role}</CardLegend>
            <CardTitle>{title}</CardTitle>
            <CardLink />
          </Box>

          {/*-------------- CARD FILTER -------------- */}
          <Box
            bgColor={BLACK}
            h="100%"
            w="100%"
            opacity="0.6"
            pos="absolute"
          ></Box>
        </Box>
      </BoxMotion>
    </Link>
  )
}

export default ProjectCard
