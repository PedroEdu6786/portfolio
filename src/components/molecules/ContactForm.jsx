import React, { useReducer } from 'react'
import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  useToast,
  Spinner,
} from '@chakra-ui/react'
import ButtonAction from '../atoms/ButtonAction'
import InputForm from '../atoms/InputForm'
import AreaForm from '../atoms/AreaForm'
import { emailReducer } from '../../reducers/emailReducers'
import { INITIAL_STATE } from '../../constants/emailConstants'

const URL = '/api/contact'

const ContactForm = ({ ...rest }) => {
  const [state, dispatch] = useReducer(emailReducer, INITIAL_STATE)
  const toast = useToast()

  /*-------------- ACTIONS -------------- */
  const setStatus = (status) => dispatch({ type: 'updateStatus', status })

  const updateFieldValue = (field) => (event) => {
    dispatch({
      type: 'updateFieldValue',
      field,
      value: event.target.value,
    })
  }

  /*-------------- FORM SUBMIT -------------- */
  const handleSubmit = async () => {
    if (isValidSubmit()) {
      setStatus('PENDING')

      let data = await sendRequest()

      setTimeout(() => {
        displayToast(data)
        setStatus(data.status.toUpperCase())
      }, 2000)
    } else {
      setStatus('ERROR')
      displayToast({
        title: 'Empty Inputs',
        description: 'Fill empty inputs',
        status: 'warning',
      })
    }
  }

  /*-------------- EMAIL SUBMIT -------------- */
  const sendRequest = async () => {
    let response = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state),
    })

    let data = response.json()

    return data
  }

  /*-------------- DISPLAY MESSAGE -------------- */
  const displayToast = (data) => {
    toast({
      title: data.title,
      description: data.description,
      status: data.status,
      duration: 5000,
      isClosable: true,
    })
  }

  /*-------------- DISPLAY MESSAGE -------------- */
  const isValidSubmit = () => {
    for (let item in state) {
      let isValidInput = state[item].split(' ').join('') !== ''
      if (!isValidInput) return false
    }

    return true
  }

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
            onChange={updateFieldValue('name')}
          />
        </Box>

        <Box>
          <FormLabel>What's email?</FormLabel>
          <InputForm
            id="emailInput"
            type="email"
            placeholder="yourock@email.com"
            onChange={updateFieldValue('email')}
          />
        </Box>

        {/*-------------- EMAIL INPUT -------------- */}
        <Box>
          <FormLabel>What's the subject about?</FormLabel>
          <InputForm
            id="subjectInput"
            type="text"
            placeholder="New Project"
            onChange={updateFieldValue('subject')}
          />
        </Box>

        {/*-------------- TEXT AREA -------------- */}
        <Box>
          <FormLabel>What's up?</FormLabel>
          <AreaForm
            placeholder="Hello, my name is John Doe, I just wanna chat for a bit"
            onChange={updateFieldValue('body')}
          />
        </Box>

        {/*-------------- ACTION -------------- */}
        <ButtonAction
          primary
          maxW={{ md: '14rem' }}
          type="submit"
          onClick={handleSubmit}
        >
          {state.status === 'PENDING' ? <Spinner /> : "Let's get in touch"}
        </ButtonAction>
      </Stack>
    </FormControl>
  )
}

export default ContactForm
