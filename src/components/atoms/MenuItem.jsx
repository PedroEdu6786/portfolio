import React from 'react'
import { Box, Link } from '@chakra-ui/react'
import { Link as LinkC } from 'next/link'

import { togglePrimaryValue } from '../../utils/colorMode'

const MenuItem = ({ children, isFirst, to = '/', ...rest }) => {
  const COLOR = togglePrimaryValue()
  return (
    <Box
      {...rest}
      border={isFirst ? '2px' : 'none'}
      borderColor={COLOR}
      borderRadius="1rem"
    >
      <Link as={LinkC} href={to} fontWeight="bold" py={0.75} px={4}>
        {children}
      </Link>
    </Box>
  )
}

export default MenuItem
