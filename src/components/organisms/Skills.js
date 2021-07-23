import React from 'react'
import { Box, Wrap, WrapItem, Stack } from '@chakra-ui/react'
import SkillsCard from '../molecules/SkillsCard.jsx'
import SectionTitle from '../molecules/SectionTitle'
import { skills as SkillIcons } from '../../utils/skills'

const Skills = ({ skills }) => {
  const skillList = skills.map((skill, index) => ({
    id: skill.id,
    skill_title: skill.data.skill_title[0].text,
    skills: skill.data.skills,
    icon: SkillIcons[index],
  }))

  return (
    <>
      <Stack spacing="6rem">
        {/*-------------- DESCRIPTION -------------- */}
        <Stack spacing={6}>
          <SectionTitle
            heading="My Skills"
            shadow="Skills"
            description="Skills I've developed through out my time"
          />
        </Stack>

        {/*-------------- SKILLS -------------- */}
        <Box>
          <Wrap spacing={14}>
            {skillList.map((skill) => (
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
