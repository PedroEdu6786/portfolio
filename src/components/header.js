import { useState, useRef } from 'react'
import { Box, Flex, Heading, Text, Button, Spacer } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import { CgMenuRight } from 'react-icons/cg'

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <a href={to}>{children}</a>
    </Text>
  )
}

const MenuIcon = () => <CgMenuRight fontSize="1.75rem" />

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Flex as="header" align="center" justify="space-between" w="100%" p={7}>
      <Box alignSelf="center">
        <Heading as="h3" size="sm">
          Pedro Cruz
        </Heading>
      </Box>

      <Flex display={{ base: 'flex', md: 'none' }} justify="space-between">
        <Text
          fontWeight="bold"
          border="2px"
          borderColor="portfolio.blue"
          py={0.75}
          px={4}
          borderRadius="1rem"
        >
          Projects
        </Text>
        <Spacer mr=".75rem" />
        <Box onClick={onOpen}>
          <MenuIcon />
        </Box>
      </Flex>

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
              <Flex flexDirection="column">
                <MenuItem>Home</MenuItem>
                <MenuItem>Home</MenuItem>
                <MenuItem>Home</MenuItem>
                <MenuItem>Home</MenuItem>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  )
}

export default Header
