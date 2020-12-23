import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Stack,
} from '@chakra-ui/react'
import { BsFillPeopleFill, BsCodeSlash, BsLaptop } from 'react-icons/bs'
import { MdWeb } from 'react-icons/md'
import { RiUmbrellaLine } from 'react-icons/ri'
import SkillsCard from './SkillsCard'
import SectionLayout from './SectionLayout'

const Skills = () => {
  return (
    <SectionLayout>
      <Stack spacing={8}>
        <Stack spacing={6}>
          <Flex align="center">
            <Heading as="h2" fontSize="2.25rem">
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
          <Text>Skills I've developed through out my time</Text>
        </Stack>
        <Box>
          <Wrap spacing={8}>
            <WrapItem>
              <SkillsCard
                icon={<BsFillPeopleFill fontSize="6rem" color="#6380E8" />}
                title="Soft Skills"
              />
            </WrapItem>
            <WrapItem>
              <SkillsCard
                icon={<BsCodeSlash fontSize="6rem" color="#6380E8" />}
                title="Programming Languages"
              />
            </WrapItem>
            <WrapItem>
              <SkillsCard
                icon={<BsLaptop fontSize="6rem" color="#6380E8" />}
                title="Technologies"
              />
            </WrapItem>
            <WrapItem>
              <SkillsCard
                icon={<MdWeb fontSize="6rem" color="#6380E8" />}
                title="Web Development"
              />
            </WrapItem>
            <WrapItem>
              <SkillsCard
                icon={<RiUmbrellaLine fontSize="6rem" color="#6380E8" />}
                title="Others"
              />
            </WrapItem>
          </Wrap>
        </Box>
      </Stack>
    </SectionLayout>
  )
}

export default Skills
