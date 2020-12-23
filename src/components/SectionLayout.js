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
      mt={15}
      mb={20}
      mx="auto"
      py={12}
      px={6}
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
