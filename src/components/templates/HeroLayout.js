import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@chakra-ui/react'

const HeroLayout = ({ children, ...rest }) => {
  return (
    <Grid
      as="section"
      h={{ base: '35rem', md: '70vh' }}
      minH="450px"
      maxW="1400px"
      templateColumns="100%"
      columnGap={8}
      w="100%"
      mx="auto"
      mt="9rem"
      mb={{ base: '6rem' }}
      px={{ base: 6, md: 10 }}
      pos="relative"
      overflow="hidden"
      {...rest}
    >
      {children}
    </Grid>
  )
}

HeroLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default HeroLayout
