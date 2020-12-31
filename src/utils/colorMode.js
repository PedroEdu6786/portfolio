import { useColorModeValue } from '@chakra-ui/react'
import { BLUE, RED, LIGHT_RED, LIGHT_BLUE, DARK_RED, DARK_BLUE } from './colors'

export const togglePrimaryValue = () => {
  return useColorModeValue(BLUE, RED)
}

export const toggleLightValue = () => {
  return useColorModeValue(LIGHT_BLUE, LIGHT_RED)
}

export const toggleDarkValue = () => {
  return useColorModeValue(DARK_BLUE, DARK_RED)
}
