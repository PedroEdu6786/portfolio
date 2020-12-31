import React from 'react'
import PropTypes from 'prop-types'
import { Box, Wrap, Heading, Stack, SimpleGrid } from '@chakra-ui/react'
import Pill from '../atoms/Pill'
import { LIGHT_BLUE } from '../../utils/colors'

const SkillsCard = ({ icon, title, skills }) => {
  return (
    <SimpleGrid
      columns={2}
      templateColumns="100px auto"
      spacing={1}
      maxW={{ base: '400px', md: '300px', lg: '400px' }}
    >
      {/*-------------- SIDE ICON -------------- */}
      <Box>{icon}</Box>

      {/*-------------- SKILLS DESCRIPTION -------------- */}
      <Stack>
        <Heading as="h3" size="lg" fontWeight="semibold">
          {title}
        </Heading>

        {/*-------------- SKILLS -------------- */}
        <Wrap spacing={1}>
          {skills.map((skill, key) => (
            <Pill key={key} skill={skill} />
          ))}
        </Wrap>
      </Stack>
    </SimpleGrid>
  )
}

SkillsCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
}

export default SkillsCard
