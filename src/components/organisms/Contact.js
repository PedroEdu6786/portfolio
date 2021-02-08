import React from 'react'
import { Box, Text, Stack, HStack, Link } from '@chakra-ui/react'
import { HiOutlineMail } from 'react-icons/hi'
import SectionTitle from '../molecules/SectionTitle'
import ContactForm from '../molecules/ContactForm'

const Contact = () => {
  return (
    <Box>
      <Stack
        spacing={{ base: '2rem', md: '6rem' }}
        justify="space-between"
        direction={['column', 'row']}
      >
        {/*-------------- DESCRIPTION -------------- */}
        <Stack spacing="1rem">
          {/*-------------- TITLE -------------- */}
          <SectionTitle
            heading="Let's make things happen"
            shadow="Contact"
            description="Now that you’ve seen what i can do, let’s get in touch and start
          making magic together!"
          />

          {/*-------------- EMAIL -------------- */}
          <Link href="mailto:cruzeduardo029@gmail.com" isExternal>
            <HStack>
              <HiOutlineMail fontSize="1.5rem" />
              <Text>cruzeduardo029@gmail.com</Text>
            </HStack>
          </Link>
        </Stack>

        {/*-------------- FORM -------------- */}
        <ContactForm />
      </Stack>
    </Box>
  )
}

export default Contact
