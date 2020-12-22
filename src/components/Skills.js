import React from 'react'
import { Box, Flex, Heading, Text, Container, Stack } from '@chakra-ui/react'
import SkillsCard from './SkillsCard'
import { BsFillPeopleFill, BsCodeSlash, BsLaptop } from 'react-icons/bs'
import { MdWeb } from 'react-icons/md'
import { RiUmbrellaLine } from 'react-icons/ri'

const Skills = () => {
  return (
    <Box my="8rem">
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
        <Stack spacing={8} wrap="wrap">
          <SkillsCard
            icon={<BsFillPeopleFill fontSize="6rem" color="#6380E8" />}
            title="Soft Skills"
          />
          <SkillsCard
            icon={<BsCodeSlash fontSize="6rem" color="#6380E8" />}
            title="Programming Languages"
          />
          <SkillsCard
            icon={<BsLaptop fontSize="6rem" color="#6380E8" />}
            title="Technologies"
          />
          <SkillsCard
            icon={<MdWeb fontSize="6rem" color="#6380E8" />}
            title="Web Development"
          />
          <SkillsCard
            icon={<RiUmbrellaLine fontSize="6rem" color="#6380E8" />}
            title="Others"
          />
        </Stack>
      </Box>
    </Box>
  )
}

export default Skills
