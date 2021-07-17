import React from 'react'
import { Box, Link } from '@chakra-ui/react'
import { Link as LinkR } from 'react-scroll'

import { togglePrimaryValue } from '../../utils/color-mode'

const MenuItem = ({ children, isFirst, to = '/', ...rest }) => {
  const COLOR = togglePrimaryValue()
  return (
    <Box
      {...rest}
      border={isFirst ? '2px' : 'none'}
      borderColor={COLOR}
      borderRadius="1rem"
    >
      <Link as={LinkR} to={to} smooth={true} fontWeight="bold" py={0.75} px={3}>
        {children}
      </Link>
    </Box>
  )
}

export default MenuItem
