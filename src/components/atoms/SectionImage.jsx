import React from 'react'
import { chakra } from '@chakra-ui/react'
import Image from 'next/image'

const ProductImage = chakra(Image)

const SectionImage = ({ src, alt, ...rest }) => {
  return <ProductImage src={src} alt={alt} pos="absolute" {...rest} />
}

export default SectionImage
