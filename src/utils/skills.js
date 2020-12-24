import { BsFillPeopleFill, BsCodeSlash, BsLaptop } from 'react-icons/bs'
import { MdWeb } from 'react-icons/md'
import { RiUmbrellaLine } from 'react-icons/ri'
import ReactIcon from '../components/atoms/ReactIcon'
import { BLUE } from './colors'

const SIZE = '6rem'

export const skills = [
  {
    id: 1,
    title: 'Soft Skills',
    icon: <ReactIcon as={BsFillPeopleFill} fontSize={SIZE} color={BLUE} />,
    skills: [
      'Communication',
      'Adaptability',
      'Patience',
      'Critical Thinking',
      'Desire to Learn',
    ],
  },
  {
    id: 2,
    title: 'Programming Languages',
    icon: <ReactIcon as={BsCodeSlash} fontSize={SIZE} color={BLUE} />,
    skills: ['Javascript', 'Java'],
  },
  {
    id: 3,
    title: 'Technologies',
    icon: <ReactIcon as={BsLaptop} fontSize={SIZE} color={BLUE} />,
    skills: ['React', 'Next.js', 'Svelte', 'Node', 'Express', 'MongoDB'],
  },
  {
    id: 4,
    title: 'Web Development',
    icon: <ReactIcon as={MdWeb} fontSize={SIZE} color={BLUE} />,
    skills: ['HTML', 'CSS', 'Semantic UI', 'Chakra UI', 'HTTP', 'REST API'],
  },
  {
    id: 5,
    title: 'Others',
    icon: <ReactIcon as={RiUmbrellaLine} fontSize={SIZE} color={BLUE} />,
    skills: [
      'English',
      'Web Design',
      'Figma',
      'Photoshop',
      'Guitar Player',
      'Hilarious',
      'Game Maniac',
    ],
  },
]
