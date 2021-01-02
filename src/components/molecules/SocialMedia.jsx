import React from 'react'
import { Link } from '@chakra-ui/react'
import { Link as LinkC } from 'next/link'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import ReactIcon from '../atoms/ReactIcon'
import { BLACK } from '../../utils/colors'

const SocialMedia = ({ ...rest }) => {
  return (
    <>
      <Link
        as={LinkC}
        w="1.6rem"
        href="https://github.com/PedroEdu6786"
        isExternal
      >
        <ReactIcon fontSize="1.6rem" color={BLACK} icon={FiGithub} {...rest} />
      </Link>
      <Link
        as={LinkC}
        w="1.6rem"
        href="https://www.linkedin.com/in/pedro-eduardo-cruz-de-la-fuente-1b632b176/"
        isExternal
      >
        <ReactIcon
          fontSize="1.6rem"
          color={BLACK}
          icon={FiLinkedin}
          {...rest}
        />
      </Link>
      <Link
        as={LinkC}
        w="1.6rem"
        href="https://www.instagram.com/pedro_edu6786/"
        isExternal
      >
        <ReactIcon
          fontSize="1.6rem"
          color={BLACK}
          icon={FaInstagram}
          {...rest}
        />
      </Link>
    </>
  )
}

export default SocialMedia
