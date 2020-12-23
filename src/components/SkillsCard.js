import React from 'react'
import { Box, Flex, Heading, Text, Container, HStack } from '@chakra-ui/react'

const SkillsCard = ({ icon, title, skills }) => {
  return (
    <HStack spacing={6} justify="center" w="300px">
      {icon}
      <Box ml="1rem">
        <Heading as="h3" size="lg">
          {title}
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
    </HStack>
  )
}

export default SkillsCard
