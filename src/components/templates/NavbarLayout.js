import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Navbar = styled(Box)`
  @media screen and (max-width: 767px) {
    position: fixed;
    top: 4.5rem;
    width: 80%;
    height: 100%;
    padding: 2rem;
    transition: 0.5s;
    color: white;
  }
`

export default Navbar
