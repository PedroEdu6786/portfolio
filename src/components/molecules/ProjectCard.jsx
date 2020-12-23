import React from 'react'
import { Box } from '@chakra-ui/react'
import CardTitle from '../atoms/CardTitle'
import CardLegend from '../atoms/CardLegend'
import CardLink from '../atoms/CardLink'

const ProjectCard = ({ legend, title }) => {
  return (
    <Box
      bgImage="url('/project.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="14rem"
      h="22rem"
      borderRadius=".5rem"
      pos="relative"
      overflow="hidden"
      boxShadow="lg"
    >
      {/*-------------- CARD CONTENT -------------- */}
      <Box pos="absolute" height="100%" zIndex="2" p={5}>
        <CardLegend>{legend}</CardLegend>
        <CardTitle>{title}</CardTitle>
        <CardLink />
      </Box>

      {/*-------------- CARD FILTER -------------- */}
      <Box
        bgColor="portfolio.black"
        h="100%"
        w="100%"
        opacity="0.4"
        pos="absolute"
      ></Box>
    </Box>
  )
}

export default ProjectCard
