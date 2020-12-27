import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import { WHITE } from '../utils/colors'

const HeaderLayout = ({ children, ...rest }) => {
  return (
    <Box
      as="section"
      w="100%"
      pos="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      mx="auto"
      px={{ base: 6, md: 10 }}
      bgColor={WHITE}
      maxW="1400px"
      {...rest}
    >
      {children}
    </Box>
  )
}

HeaderLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default HeaderLayout
