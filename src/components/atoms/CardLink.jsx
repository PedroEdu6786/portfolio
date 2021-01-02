import React from 'react'
import { Link as LinkC } from 'next/link'
import { Text, Link, HStack } from '@chakra-ui/react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import ReactIcon from './ReactIcon'
import { WHITE } from '../../utils/colors'

const CardLink = () => {
  return (
    <Link as={LinkC} pos="absolute" bottom="0" pb={5} color={WHITE} href="#">
      {/*-------------- CONTENT -------------- */}
      <HStack align="center">
        <Text>See more</Text>
        {/*-------------- ICON -------------- */}
        <ReactIcon icon={BsBoxArrowUpRight} color={WHITE} />
      </HStack>
    </Link>
  )
}

export default CardLink
