import React from 'react'
import { Image } from '@chakra-ui/react'

const HeroImage = ({ src, alt, ...rest }) => {
  return (
    <Image
      maxW={{ base: '250px', md: '300px', lg: '350px' }}
      mr={{ base: '-20vw', sm: '-10vw', md: '2rem' }}
      pos="absolute"
      bottom="0"
      right="0"
      zIndex="0"
      src={src}
      alt={alt}
      {...rest}
    />
  )
}

export default HeroImage
