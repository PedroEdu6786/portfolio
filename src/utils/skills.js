import { BsFillPeopleFill, BsCodeSlash, BsLaptop } from 'react-icons/bs'
import { MdWeb } from 'react-icons/md'
import { RiUmbrellaLine } from 'react-icons/ri'
import ReactIcon from '../components/atoms/ReactIcon'

const SIZE = '5rem'

export const skills = [
  <ReactIcon as={BsFillPeopleFill} fontSize={SIZE} />,
  <ReactIcon as={BsCodeSlash} fontSize={SIZE} />,
  <ReactIcon as={BsLaptop} fontSize={SIZE} />,
  <ReactIcon as={MdWeb} fontSize={SIZE} />,
  <ReactIcon as={RiUmbrellaLine} fontSize={SIZE} />,
]
