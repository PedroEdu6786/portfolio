import { useState } from 'react'
import { Box, Heading, Stack, Link } from '@chakra-ui/react'
import NavLayout from '../NavLayout'
import NavbarLayout from '../NavbarLayout'
import MenuItem from '../atoms/MenuItem'
import MenuIcon from '../atoms/MenuIcon'

const Header = () => {
  const [show, setShow] = useState(false)

  const toggleMenu = () => {
    setShow(!show)
    console.log(show)
  }

  return (
    <NavLayout as="header">
      {/*-------------- LOGO -------------- */}
      <Box>
        <Heading as="h3" size="sm">
          <Link href="#">Pedro Cruz</Link>
        </Heading>
      </Box>

      <Stack
        display={{ base: 'flex', md: 'none' }}
        direction="row"
        onClick={toggleMenu}
      >
        <MenuItem isFirst to="#projects">
          Projects
        </MenuItem>
        <MenuIcon />
      </Stack>

      {/*-------------- NAVBAR -------------- */}
      <NavbarLayout as="nav" right={show ? '-100%' : 0}>
        <Stack
          spacing={{ base: '2rem', md: '1rem' }}
          align="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <MenuItem
            isFirst
            to="#projects"
            display={{ base: 'none', md: 'flex' }}
          >
            Projects
          </MenuItem>
          <MenuItem to="#skills">Skills</MenuItem>
          <MenuItem to="#about">About</MenuItem>
          <MenuItem to="#contact">Contact</MenuItem>
        </Stack>
      </NavbarLayout>
    </NavLayout>
  )
}

export default Header
