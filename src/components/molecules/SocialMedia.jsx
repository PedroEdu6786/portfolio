import React from 'react'
import { Link } from '@chakra-ui/react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import ReactIcon from '../atoms/ReactIcon'

const SocialMedia = ({ ...rest }) => {
  return (
    <>
      <Link href="https://github.com/PedroEdu6786">
        <ReactIcon fontSize="1.6rem" icon={FiGithub} {...rest} />
      </Link>
      <Link href="https://www.linkedin.com/in/pedro-eduardo-cruz-de-la-fuente-1b632b176/">
        <ReactIcon fontSize="1.6rem" icon={FiLinkedin} {...rest} />
      </Link>
      <Link href="https://www.instagram.com/pedro_edu6786/">
        <ReactIcon fontSize="1.6rem" icon={FaInstagram} {...rest} />
      </Link>
    </>
  )
}

export default SocialMedia
