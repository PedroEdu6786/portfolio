import { BsFillPeopleFill, BsCodeSlash, BsLaptop } from 'react-icons/bs'
import { MdWeb } from 'react-icons/md'
import { RiUmbrellaLine } from 'react-icons/ri'

export const skills = [
  {
    id: 1,
    title: 'Soft Skills',
    icon: <BsFillPeopleFill fontSize="6rem" color="#6380E8" />,
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
    icon: <BsCodeSlash fontSize="6rem" color="#6380E8" />,
    skills: ['Javascript', 'Java'],
  },
  {
    id: 3,
    title: 'Technologies',
    icon: <BsLaptop fontSize="6rem" color="#6380E8" />,
    skills: ['React', 'Next.js', 'Svelte', 'Node', 'Express', 'MongoDB'],
  },
  {
    id: 4,
    title: 'Web Development',
    icon: <MdWeb fontSize="6rem" color="#6380E8" />,
    skills: ['HTML', 'CSS', 'Semantic UI', 'Chakra UI', 'HTTP', 'REST API'],
  },
  {
    id: 5,
    title: 'Others',
    icon: <RiUmbrellaLine fontSize="6rem" color="#6380E8" />,
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
