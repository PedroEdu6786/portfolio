import React, { useState } from 'react'
import { useColorMode } from '@chakra-ui/react'
import SocialMedia from '../molecules/SocialMedia'
import HeroImage from '../atoms/HeroImage'
import HeroContent from '../molecules/HeroContent'
import BlobHero from '../atoms/BlobHero'
import { BoxMotion } from '../../motion/components/BoxMotion'
import { StackMotion } from '../../motion/components/StackMotion'
import { container } from '../../motion/variants/container'
import { item, itemLeft, itemDown } from '../../motion/variants/items'
import { bluePictures, redPictures } from '../../utils/pictures'

const Hero = ({ curriculum, setColorTransition }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { colorMode, toggleColorMode } = useColorMode()

  const cv = curriculum[0].data.cv.url

  const colorChange = () => {
    setColorTransition(true)
    setTimeout(() => toggleColorMode(), 1400)
    setTimeout(() => setColorTransition(false), 2000)
  }

  const downloadCv = () => {
    setIsLoading(true)
    setTimeout(() => {
      window.open(cv)
      setIsLoading(false)
    }, 1000)
  }

  const getRandomPicture = (pictures) => {
    let randomNumber = Math.floor(Math.random() * bluePictures.length)
    return pictures[randomNumber]
  }

  return (
    <BoxMotion variants={container} initial="hidden" animate="show">
      {/*-------------- HEADLINE AND BUTTONS -------------- */}
      <BoxMotion variants={item}>
        <HeroContent
          colorChange={colorChange}
          downloadCv={downloadCv}
          isLoading={isLoading}
        />
      </BoxMotion>

      {/*-------------- SOCIAL MEDIA -------------- */}
      <StackMotion
        variants={itemLeft}
        pos={{ base: 'relative', md: 'absolute' }}
        pt="1rem"
        bottom="0"
        fontWeight="bold"
        fontSize="xl"
        direction={{ base: 'column', md: 'row' }}
      >
        <SocialMedia />
      </StackMotion>

      {/*-------------- PICTURES -------------- */}
      <BoxMotion variants={itemDown}>
        <BlobHero />
        <HeroImage
          src={
            colorMode === 'light'
              ? getRandomPicture(bluePictures)
              : getRandomPicture(redPictures)
          }
          alt="It'sMe"
        />
      </BoxMotion>
    </BoxMotion>
  )
}

export default Hero
