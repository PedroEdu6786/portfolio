import React from 'react'
import { Box, Link } from '@chakra-ui/react'

const MenuItem = ({ children, isFirst, to = '/', ...rest }) => {
  return (
    <Box
      {...rest}
      border={isFirst ? '2px' : 'none'}
      borderColor="portfolio.blue"
      borderRadius="1rem"
    >
      <Link href={to} fontWeight="bold" py={0.75} px={4}>
        {children}
      </Link>
    </Box>
  )
}

export default MenuItem
