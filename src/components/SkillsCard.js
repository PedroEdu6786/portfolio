import React from 'react'
import { Box, Flex, Heading, Text, Container, Spacer } from '@chakra-ui/react'

const SkillsCard = () => {
  return (
    <Flex my="3rem">
      <img src="https://via.placeholder.com/80" alt="dod" />
      <Spacer />
      <Box ml="1rem">
        <Heading as="h3" size="lg">
          Soft Skills
        </Heading>
        <Flex wrap="wrap">
          <Text
            fontSize=".9rem"
            bg="portfolio.lightBlue"
            borderRadius="10rem"
            p={1}
            px={3}
            m="3px"
          >
            Communication
          </Text>
          <Text
            fontSize=".9rem"
            bg="portfolio.lightBlue"
            borderRadius="10rem"
            p={1}
            px={3}
            m="3px"
          >
            Patience
          </Text>
          <Text
            fontSize=".9rem"
            bg="portfolio.lightBlue"
            borderRadius="10rem"
            p={1}
            px={3}
            m="3px"
          >
            Adaptability
          </Text>
        </Flex>
      </Box>
    </Flex>
  )
}

export default SkillsCard
