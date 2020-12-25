import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@chakra-ui/react'

const SectionLayout = ({ children, ...rest }) => {
  return (
    <Grid
      as="section"
      maxW="1024px"
      templateColumns="100%"
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
