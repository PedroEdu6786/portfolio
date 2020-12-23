import React from 'react'
import { Text, Link, HStack } from '@chakra-ui/react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import ReactIcon from './ReactIcon'

const CardLink = () => {
  return (
    <Link pos="absolute" bottom="0" pb={5} color="portfolio.white" href="#">
      <HStack align="center">
        <Text>See more</Text>
        <ReactIcon icon={BsBoxArrowUpRight} color="portfolio.white" />
      </HStack>
    </Link>
  )
}

export default CardLink
