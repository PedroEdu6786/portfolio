import { useRef } from 'react'
import { Box, Flex, Heading, HStack } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import MenuItem from '../atoms/MenuItem'
import MenuIcon from '../atoms/MenuIcon'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <HStack align="center" justify="space-between">
      {/*-------------- LOGO -------------- */}
      <Box alignSelf="center">
        <Heading as="h3" size="sm">
          Pedro Cruz
        </Heading>
      </Box>

      {/*-------------- NAVBAR -------------- */}
      <HStack display={{ base: 'flex', md: 'none' }}>
        <MenuItem isFirst to="#projects">
          Projects
        </MenuItem>
        <Box onClick={onOpen}>
          <MenuIcon />
        </Box>
      </HStack>

      {/*-------------- SIDEBAR -------------- */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
              <Flex direction="column">
                <MenuItem>Home</MenuItem>
                <MenuItem>Home</MenuItem>
                <MenuItem>Home</MenuItem>
                <MenuItem>Home</MenuItem>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </HStack>
  )
}

export default Header
