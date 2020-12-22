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
const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
)

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
)

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
