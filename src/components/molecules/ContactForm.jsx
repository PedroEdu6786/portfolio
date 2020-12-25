import React, { useState } from 'react'
import { Box, Stack, FormControl, FormLabel } from '@chakra-ui/react'
import ButtonAction from '../atoms/ButtonAction'
import InputForm from '../atoms/InputForm'
import AreaForm from '../atoms/AreaForm'

const ContactForm = ({ ...rest }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  /*-------------- FORM VALUES -------------- */
  const handleName = (e) => setName(e.target.value)

  const handleEmail = (e) => setEmail(e.target.value)

  const handleSubject = (e) => setSubject(e.target.value)

  const handleBody = (e) => setBody(e.target.value)

  /*-------------- FORM SUBMIT -------------- */
  const handleSubmit = () => {}

  return (
    <FormControl {...rest}>
      <Stack spacing={3} justify="space-between" maxW="500px">
        {/*-------------- NAME INPUT -------------- */}
        <Box>
          <FormLabel>What's your name?</FormLabel>
          <InputForm
            id="nameInput"
            type="text"
            placeholder="John Doe"
            onChange={handleName}
          />
        </Box>

        <Box>
          <FormLabel>What's email?</FormLabel>
          <InputForm
            id="nameInput"
            type="text"
            placeholder="yourock@email.com"
            onChange={handleEmail}
          />
        </Box>

        {/*-------------- EMAIL INPUT -------------- */}
        <Box>
          <FormLabel>What's the subject about?</FormLabel>
          <InputForm
            id="emailInput"
            type="email"
            placeholder="New Project"
            onChange={handleSubject}
          />
        </Box>

        {/*-------------- TEXT AREA -------------- */}
        <Box>
          <FormLabel>What's up?</FormLabel>
          <AreaForm
            placeholder="Hello, my name is John Doe, I just wanna chat for a bit"
            onChange={handleBody}
          />
        </Box>

        {/*-------------- ACTION -------------- */}
        <ButtonAction
          variant="solid"
          maxW={{ md: '14rem' }}
          onClick={handleSubmit}
        >
          Let's get in touch
        </ButtonAction>
      </Stack>
    </FormControl>
  )
}

export default ContactForm
