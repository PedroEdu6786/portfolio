import React from 'react'
import { Box, Wrap, WrapItem, Stack } from '@chakra-ui/react'
import SkillsCard from '../molecules/SkillsCard.jsx'
import SectionTitle from '../molecules/SectionTitle'
import { skills } from '../../utils/skills'

const Skills = () => {
  return (
    <>
      <Stack spacing={8}>
        <Stack spacing={6}>
          <SectionTitle
            heading="My Skills"
            shadow="Skills"
            description="Skills I've developed through out my time"
          />
        </Stack>
        <Box>
          <Wrap spacing={14}>
            {skills.map((skill) => (
              <WrapItem key={skill.id}>
                <SkillsCard {...skill} />
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Stack>
    </>
  )
}

export default Skills
