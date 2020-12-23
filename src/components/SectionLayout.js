import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@chakra-ui/react'

const SectionLayout = ({ children, ...rest }) => {
  return (
    <Grid
      maxW="1024px"
      templateColumns="100%"
      columnGap={8}
      w="100%"
      my={32}
      mx="auto"
      py={12}
      px={{ base: 6, md: 10 }}
      pos="relative"
      overflow="hidden"
      {...rest}
    >
      {children}
    </Grid>
  )
}

SectionLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default SectionLayout
