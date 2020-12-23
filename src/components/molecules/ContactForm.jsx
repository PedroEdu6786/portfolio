import React from 'react'
import { Box, Stack, FormControl, FormLabel } from '@chakra-ui/react'
import ButtonAction from '../atoms/ButtonAction'
import InputForm from '../atoms/InputForm'
import AreaForm from '../atoms/AreaForm'

const ContactForm = ({ ...rest }) => {
  return (
    <FormControl {...rest}>
      <Stack spacing={3}>
        {/*-------------- NAME INPUT -------------- */}
        <Box>
          <FormLabel>Whats your name?</FormLabel>
          <InputForm id="nameInput" type="text" placeholder="John Doe" />
        </Box>

        {/*-------------- EMAIL INPUT -------------- */}
        <Box>
          <FormLabel>Provide me your email</FormLabel>
          <InputForm
            id="emailInput"
            type="email"
            placeholder="yourock@email.com"
          />
        </Box>

        {/*-------------- TEXT AREA -------------- */}
        <Box>
          <FormLabel>What's up?</FormLabel>
          <AreaForm placeholder="I just wanna chat for a while, you seem interesting" />
        </Box>

        {/*-------------- ACTION -------------- */}
        <ButtonAction variant="solid" maxW={{ md: '14rem' }}>
          Let's get in touch
        </ButtonAction>
      </Stack>
    </FormControl>
  )
}

export default ContactForm
