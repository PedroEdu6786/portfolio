import { useState } from 'react'
import { Box, Heading, Stack } from '@chakra-ui/react'
import MenuItem from '../atoms/MenuItem'
import MenuIcon from '../atoms/MenuIcon'

const Header = () => {
  const [show, setShow] = useState(false)

  const toggleMenu = () => {
    setShow(!show)
    console.log(show)
  }

  return (
    <Stack as="header" direction="row" align="center" justify="space-between">
      {/*-------------- LOGO -------------- */}
      <Box alignSelf="center">
        <Heading as="h3" size="sm">
          Pedro Cruz
        </Heading>
      </Box>

      {/*-------------- NAVBAR -------------- */}
      <Stack direction="row" align="center">
        <MenuItem isFirst to="#projects">
          Projects
        </MenuItem>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={show ? { base: 'flex' } : { base: 'none', md: 'flex' }}
        >
          <MenuItem to="#skills">Skills</MenuItem>
          <MenuItem to="#about">About</MenuItem>
          <MenuItem to="#contact">Contact</MenuItem>
        </Stack>
        <Box display={{ base: 'flex', md: 'none' }} onClick={toggleMenu}>
          <MenuIcon />
        </Box>
      </Stack>

      {/*-------------- SIDEBAR -------------- */}
    </Stack>
  )
}

export default Header
