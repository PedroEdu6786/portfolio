import { useState } from 'react'
import { useColorMode } from '@chakra-ui/react'
import { Box, Heading, Stack, Link } from '@chakra-ui/react'
import NavLayout from '../templates/NavLayout'
import NavbarLayout from '../templates/NavbarLayout'
import MenuItem from '../atoms/MenuItem'
import MenuIcon from '../atoms/MenuIcon'
import { BoxMotion } from '../../motion/components/BoxMotion'
import { containerHeader } from '../../motion/variants/container'
import { WHITE } from '../../utils/colors'
import { togglePrimaryValue } from '../../utils/color-mode'

const Header = () => {
  const { colorMode } = useColorMode()

  const [show, setShow] = useState(false)
  const BG_COLOR = togglePrimaryValue()

  const toggleMenu = () => setShow(!show)

  return (
    <BoxMotion variants={containerHeader} initial="hidden" animate="show">
      <NavLayout as="header">
        {/*-------------- LOGO -------------- */}
        <Box>
          <Heading as="h3" size="sm">
            <Link href="#">
              {colorMode === 'light' ? 'Pedro' : 'Pipe'} Cruz
            </Link>
          </Heading>
        </Box>

        {/*-------------- MENU ICON AND CLICK TO ACTION PROJECTS -------------- */}
        <Stack display={{ base: 'flex', md: 'none' }} direction="row">
          <MenuItem isFirst to="#projects">
            Projects
          </MenuItem>
          <Box onClick={toggleMenu}>
            <MenuIcon />
          </Box>
        </Stack>

        {/*-------------- NAVBAR -------------- */}
        <NavbarLayout
          as="nav"
          right={show ? 0 : '-100%'}
          bgColor={{ base: BG_COLOR, md: WHITE }}
        >
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
            <MenuItem to="#skills" onClick={toggleMenu}>
              Skills
            </MenuItem>
            <MenuItem to="#about" onClick={toggleMenu}>
              About
            </MenuItem>
            <MenuItem to="#contact" onClick={toggleMenu}>
              Contact
            </MenuItem>
          </Stack>
        </NavbarLayout>
      </NavLayout>
    </BoxMotion>
  )
}

export default Header
