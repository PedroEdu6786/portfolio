import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import CardTitle from '../atoms/CardTitle'
import CardLegend from '../atoms/CardLegend'
import CardLink from '../atoms/CardLink'
import { BLACK } from '../../utils/colors'

const ProjectCard = ({ legend, title }) => {
  return (
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
        <CardLegend>{legend}</CardLegend>
        <CardTitle>{title}</CardTitle>
        <CardLink />
      </Box>

      {/*-------------- CARD FILTER -------------- */}
      <Box bgColor={BLACK} h="100%" w="100%" opacity="0.4" pos="absolute"></Box>
    </Box>
  )
}

ProjectCard.propTypes = {
  legend: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ProjectCard
