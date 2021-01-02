import React from 'react'
import { Stack, useColorMode } from '@chakra-ui/react'
import ButtonAction from '../atoms/ButtonAction'

const HeroButton = () => {
  const { toggleColorMode } = useColorMode()

  const downloadCv = () => {
    window.open('/files/CV.pdf')
  }

  return (
    <Stack direction={['column', 'row']}>
      <ButtonAction primary display="flex" maxW="12rem" onClick={downloadCv}>
        Download my CV
      </ButtonAction>
      <ButtonAction
        display="flex"
        variant="outline"
        maxW="12rem"
        onClick={toggleColorMode}
      >
        Change mood
      </ButtonAction>
    </Stack>
  )
}

export default HeroButton
