import { useRef } from 'react'
import { Box, Flex, Heading, Text, Link, HStack } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { CgMenuRight } from 'react-icons/cg'

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Box
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Box>
  )
}

const MenuIcon = () => <CgMenuRight fontSize="1.75rem" />

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
