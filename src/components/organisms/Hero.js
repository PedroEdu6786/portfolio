import React from 'react'
import SocialMedia from '../molecules/SocialMedia'
import HeroImage from '../atoms/HeroImage'
import HeroContent from '../molecules/HeroContent'
import BlobHero from '../atoms/BlobHero'
import { BoxMotion } from '../../motion/components/BoxMotion'
import { StackMotion } from '../../motion/components/StackMotion'
import { container } from '../../motion/variants/container'
import { item, itemLeft, itemDown } from '../../motion/variants/items'

const Hero = () => {
  return (
    <BoxMotion variants={container} initial="hidden" animate="show">
      {/*-------------- HEADLINE AND BUTTONS -------------- */}
      <BoxMotion variants={item}>
        <HeroContent />
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
        <HeroImage src="/images/hero-img.png" alt="It'sMe" />
      </BoxMotion>
    </BoxMotion>
  )
}

export default Hero
