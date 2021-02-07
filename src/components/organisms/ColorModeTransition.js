import React, { useState, useEffect } from 'react'
import { useColorMode } from '@chakra-ui/react'
import { BoxMotion } from '../../motion/components/BoxMotion'
import { transitionPage } from '../../motion/variants/transition'
import { RED, BLUE } from '../../utils/colors'

const ColorModeTransition = ({ colorTransition }) => {
  const [bgColor, setBgColor] = useState(RED)
  const { colorMode } = useColorMode()

  useEffect(() => {
    if (colorMode === 'light') {
      setTimeout(() => setBgColor(RED), 2000)
    } else {
      setTimeout(() => setBgColor(BLUE), 2000)
    }
  }, [colorMode, bgColor, setBgColor])

  return (
    <BoxMotion
      position="fixed"
      top="0"
      left="0"
      w="100%"
      h="100vh"
      overflow="hidden"
      zIndex="100"
      pointerEvents="none"
    >
      <BoxMotion
        variants={transitionPage}
        initial="hidden"
        animate={colorTransition ? 'show' : 'hidden'}
        position="relative"
        px="0"
        pt="0"
        bgColor={bgColor}
        w="100%"
        h="100%"
      ></BoxMotion>
    </BoxMotion>
  )
}

export default ColorModeTransition
