import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { togglePrimaryValue } from '../../utils/color-mode'

const Blob = ({ ...rest }) => {
  const COLOR = togglePrimaryValue()

  let rotation = 0
  let blob

  useEffect(() => {
    blob = document.querySelector('#blobAbout')

    function create() {
      rotation += 40

      let r1 = random(24, 75)
      let r2 = random(24, 75)
      let r3 = random(24, 75)
      let r4 = random(24, 75)

      let r11 = remain(r1)
      let r22 = remain(r2)
      let r33 = remain(r3)
      let r44 = remain(r4)

      let coordinates = `${r1}% ${r11}% ${r22}% ${r2}% / ${r3}% ${r4}% ${r44}% ${r33}%`

      blob.style['border-radius'] = coordinates

      blob.style['transform'] = `rotate('${rotation}'deg)`
    }

    setInterval(create, 2000)

    function random(min, max) {
      return Math.floor(min + Math.random() * (max - min))
    }

    function remain(n) {
      return 100 - n
    }
  }, [])

  return (
    <Box
      id="blobAbout"
      m="auto"
      display="block"
      pos="absolute"
      boxSize={{ base: '300px', md: '325px', lg: '350px' }}
      bottom="0"
      zIndex="0"
      borderRadius="50%"
      overflow="hidden"
      transition="all ease 1s"
      transitionProperty="border-radius, transform"
      transitionDuration="1s"
      {...rest}
    >
      <Box
        id="content"
        pos="absolute"
        left="50%"
        top="50%"
        boxSize="400px"
        transform="translate(-50%, -50%) rotate(var(--r, 0deg))"
        bgColor={COLOR}
        transition="all ease 1s"
        transitionProperty="border-radius, transform"
        transitionDuration="1s"
      ></Box>
    </Box>
  )
}

export default Blob
