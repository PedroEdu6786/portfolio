import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  HStack,
  Link as LinkC,
} from '@chakra-ui/react'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
} from '@chakra-ui/react'
import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
  return (
    <Box p={7} py="1||rem">
      <Flex align="center" pt="3rem">
        <Heading pt={5} as="h2" fontSize="2.25rem">
          Let's make things happen
        </Heading>
        <Heading
          pos="absolute"
          fontSize="7rem"
          opacity=".1"
          color="portfolio.blue"
        >
          Contact
        </Heading>
      </Flex>
      <Text pt={8}>
        Now that you’ve seen what i can do, let’s get in touch and start making
        magic together!
      </Text>
      <LinkC href="mailto:pedrcg835@gmail.com" target="_blank">
        <HStack pt={8}>
          <HiOutlineMail fontSize="1.5rem" />
          <Text>pedrcg835@gmail.com</Text>
        </HStack>
      </LinkC>
      <FormControl mt={8}>
        <Stack spacing={3}>
          <Box>
            <FormLabel>Whats your name?</FormLabel>
            <Input
              bg="portfolio.lightBlue"
              type="text"
              variant="filled"
              placeholder="John Doe"
            />
          </Box>
          <Box>
            <FormLabel>Provide me your email</FormLabel>
            <Input
              bg="portfolio.lightBlue"
              type="email"
              variant="filled"
              placeholder="yourock@email.com"
            />
          </Box>
          <Box>
            <FormLabel>What's up?</FormLabel>
            <Textarea
              bg="portfolio.lightBlue"
              placeholder="I just wanna chat for a while, you seem interesting"
            />
          </Box>
          <Button bgColor="portfolio.blue" color="portfolio.white">
            Let's get in touch
          </Button>
        </Stack>
      </FormControl>
    </Box>
  )
}

export default Contact
