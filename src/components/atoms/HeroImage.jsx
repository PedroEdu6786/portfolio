import React from 'react'
import { Image } from '@chakra-ui/react'

const HeroImage = ({ src, alt, ...rest }) => {
  return (
    <Image
      mr={{ base: '-20vw', sm: '-10vw', md: '0' }}
      pos="absolute"
      bottom="-7"
      right="0"
      zIndex="0"
      src={src}
      alt={alt}
      {...rest}
    />
  )
}

export default HeroImage
