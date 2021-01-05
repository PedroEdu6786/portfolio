import { BLUE, DARK_BLUE, LIGHT_BLUE, RED, LIGHT_RED, DARK_RED } from './colors'

export const colorChangePrimary = (props) =>
  props.colorMode === 'light' ? BLUE : RED

export const colorChangeLight = (props) =>
  props.colorMode === 'light' ? LIGHT_BLUE : LIGHT_RED

export const colorChangeDark = (props) =>
  props.colorMode === 'light' ? DARK_BLUE : DARK_RED
