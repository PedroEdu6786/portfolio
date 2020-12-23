import React from 'react'
import {
  Box,
  Wrap,
  WrapItem,
  Heading,
  Text,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react'

const SkillsCard = ({ icon, title, skills }) => {
  return (
    <SimpleGrid
      columns={2}
      templateColumns="100px auto"
      columnGap="1rem"
      spacing={1}
      justify="center"
      maxW="400px"
    >
      <Box alignSelf="center">{icon}</Box>
      <Stack>
        <Heading as="h3" size="lg">
          {title}
        </Heading>
        <Wrap spacing={1}>
          {skills.map((skill, key) => (
            <WrapItem key={key}>
              <Text
                fontSize=".85rem"
                bg="portfolio.lightBlue"
                borderRadius={15}
                p={1}
                px={3}
              >
                {skill}
              </Text>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>
    </SimpleGrid>
  )
}

export default SkillsCard
