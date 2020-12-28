import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@chakra-ui/react'

const SectionLayout = ({ children, ...rest }) => {
  return (
    <Grid
      as="section"
      maxW="1400px"
      templateColumns="100%"
      mx="auto"
      py="10rem"
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
