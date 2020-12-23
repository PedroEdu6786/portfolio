import React from 'react'
import { chakra } from '@chakra-ui/react'
import Image from 'next/image'

const ProductImage = chakra(Image)

const HeroImage = ({ src, alt, ...rest }) => {
  return (
    <ProductImage
      src={src}
      alt={alt}
      pos="absolute"
      bottom="-7"
      right="0"
      mr="-4rem"
      {...rest}
    />
  )
}

export default HeroImage
