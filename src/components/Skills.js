import React from 'react'
import { Box, Flex, Heading, Text, Container, Spacer } from '@chakra-ui/react'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <Box mt="8rem">
      <Container p={7}>
        <Flex align="center">
          <Heading pt={5} as="h2" fontSize="2.25rem">
            My Skills
          </Heading>
          <Heading
            pos="absolute"
            fontSize="7rem"
            opacity=".1"
            color="portfolio.blue"
          >
            Skills
          </Heading>
        </Flex>
        <Text pt={8}>Skills I've developed through out my time</Text>
      </Container>
      <Box p={7}>
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
      </Box>
    </Box>
  )
}

export default Skills
