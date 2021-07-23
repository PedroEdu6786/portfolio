import React from 'react'
import PropTypes from 'prop-types'
import { Box, Wrap, Heading, Stack, SimpleGrid } from '@chakra-ui/react'
import Pill from '../atoms/Pill'

const SkillsCard = ({ icon, skill_title, skills }) => {
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
          {skill_title}
        </Heading>

        {/*-------------- SKILLS -------------- */}
        <Wrap spacing={1}>
          {skills.map((skill, key) => (
            <Box key={key}>
              <Pill skill={skill.skill} />
            </Box>
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
