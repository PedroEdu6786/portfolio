import React from 'react'
import Title from '../atoms/Title'
import TitleVariant from '../atoms/TitleVariant'
import Description from '../atoms/Description'
import ButtonAction from '../atoms/ButtonAction'
import { StackMotion } from '../../motion/components/StackMotion'
import { containerHero } from '../../motion/variants/container'
import { item } from '../../motion/variants/items'
import { useColorMode } from '@chakra-ui/react'

const HeroContent = ({ colorChange, downloadCv }) => {
  const { colorMode } = useColorMode()

  return (
    <StackMotion
      variants={containerHero}
      initial="hidden"
      animate="show"
      spacing={8}
      pos="relative"
      pt={{ md: '8vh' }}
      zIndex="1"
    >
      {/*-------------- HEADLINE -------------- */}
      <StackMotion
        variants={item}
        maxW={{ base: '500px', lg: '600px' }}
        spacing={{ base: 4, md: 8 }}
      >
        <Title>
          I {colorMode === 'light' ? 'develop' : 'reach new'}{' '}
          <TitleVariant>
            {colorMode === 'light' ? 'dreams' : 'heights'}
          </TitleVariant>{' '}
          and{' '}
          <TitleVariant>
            {colorMode === 'light' ? 'smiles' : 'dreams'}
          </TitleVariant>
        </Title>
        <Description>
          Software Engineer, Front-End Developer,{' '}
          {colorMode === 'light' ? 'Laugh Machine' : 'Over Achiever'}
        </Description>
      </StackMotion>

      {/*-------------- BUTTONS -------------- */}
      <StackMotion variants={containerHero} direction={['column', 'row']}>
        <ButtonAction primary display="flex" maxW="12rem" onClick={downloadCv}>
          Download my CV
        </ButtonAction>
        <ButtonAction
          display="flex"
          variant="outline"
          maxW="12rem"
          onClick={colorChange}
        >
          Change mood
        </ButtonAction>
      </StackMotion>
    </StackMotion>
  )
}

export default HeroContent
