import React from 'react'
import { Stack } from '@chakra-ui/react'
import Title from '../atoms/Title'
import TitleVariant from '../atoms/TitleVariant'
import Description from '../atoms/Description'

const Headline = () => {
  return (
    <Stack maxW={{ base: '500px', lg: '600px' }} spacing={{ base: 4, md: 8 }}>
      <Title>
        I develop <TitleVariant>dreams</TitleVariant> and{' '}
        <TitleVariant>smiles</TitleVariant>
      </Title>
      <Description>
        Software Engineer, Front-End Developer, Laugh machine
      </Description>
    </Stack>
  )
}

export default Headline
