import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
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
import SectionTitle from '../molecules/SectionTitle'
import ButtonAction from '../atoms/ButtonAction'

const Contact = () => {
  return (
    <>
      <Stack spacing={6}>
        <SectionTitle
          heading="Let's make things happen"
          shadow="Contact"
          description="Now that you’ve seen what i can do, let’s get in touch and start
          making magic together!"
        />

        <LinkC href="mailto:pedrcg835@gmail.com" target="_blank">
          <HStack>
            <HiOutlineMail fontSize="1.5rem" />
            <Text>pedrcg835@gmail.com</Text>
          </HStack>
        </LinkC>
        <FormControl>
          <Stack spacing={3}>
            <Box>
              <FormLabel>Whats your name?</FormLabel>
              <Input
                id="nameInput"
                bg="portfolio.lightBlue"
                type="text"
                variant="filled"
                placeholder="John Doe"
              />
            </Box>
            <Box>
              <FormLabel>Provide me your email</FormLabel>
              <Input
                id="emailInput"
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
            <ButtonAction variant="solid">Let's get in touch</ButtonAction>
          </Stack>
        </FormControl>
      </Stack>
    </>
  )
}

export default Contact
