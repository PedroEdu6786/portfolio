import React from 'react'
import Image from 'next/image'

const SectionImage = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={200} height={300} />
}

export default SectionImage
