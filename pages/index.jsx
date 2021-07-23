import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import Header from '../src/components/organisms/Header'
import Hero from '../src/components/organisms/Hero'
import Projects from '../src/components/organisms/Projects'
import Skills from '../src/components/organisms/Skills'
import About from '../src/components/organisms/About'
import Contact from '../src/components/organisms/Contact'
import Footer from '../src/components/organisms/Footer'
import SectionLayout from '../src/components/templates/SectionLayout'
import HeaderLayout from '../src/components/templates/HeaderLayout'
import HeroLayout from '../src/components/templates/HeroLayout'
import { WHITE } from '../src/utils/colors'
import { toggleLightValue } from '../src/utils/color-mode'
import ColorModeTransition from '../src/components/organisms/ColorModeTransition'
import { Client } from '../src/utils/prismic-configuration'
import Prismic from 'prismic-javascript'

export default function Home({ curriculum, projects, skills, about }) {
  const [colorTransition, setColorTransition] = useState(false)
  const BG_COLOR = toggleLightValue()

  return (
    <Box>
      <ColorModeTransition colorTransition={colorTransition} />
      <Box h={{ md: '100vh' }}>
        {/*-------------- HEADER -------------- */}
        <Box
          top="0"
          left="0"
          right="0"
          pos="fixed"
          h="4.5rem"
          w="100%"
          bgColor={WHITE}
          zIndex="9"
        >
          <HeaderLayout>
            <Header />
          </HeaderLayout>
        </Box>

        {/*-------------- HERO -------------- */}
        <HeroLayout>
          <Hero
            curriculum={curriculum}
            setColorTransition={setColorTransition}
          />
        </HeroLayout>
      </Box>

      {/*-------------- PROJECTS -------------- */}
      <SectionLayout id="projects" mb={0} px={0}>
        <Projects projects={projects} />
      </SectionLayout>

      {/*-------------- SKILLS -------------- */}
      <SectionLayout id="skills">
        <Skills skills={skills} />
      </SectionLayout>

      {/*-------------- ABOUT -------------- */}
      <Box id="about" my="10rem" bgColor={BG_COLOR} w="100%">
        <SectionLayout>
          <About about={about} />
        </SectionLayout>
      </Box>

      {/*-------------- CONTACT -------------- */}
      <SectionLayout id="contact">
        <Contact />
      </SectionLayout>

      {/*-------------- FOOTER -------------- */}
      <Footer />
    </Box>
  )
}

export async function getStaticProps() {
  const curriculum = await Client().query(
    Prismic.Predicates.at('document.type', 'curriculum')
  )

  const projects = await Client().query(
    Prismic.Predicates.at('document.type', 'project')
  )

  const skills = await Client().query(
    Prismic.Predicates.at('document.type', 'skills')
  )

  const about = await Client().query(
    Prismic.Predicates.at('document.type', 'about')
  )

  skills.results.sort((skill1, skill2) => skill1.uid.localeCompare(skill2.uid))

  return {
    props: {
      curriculum: curriculum.results,
      projects: projects.results,
      skills: skills.results,
      about: about.results,
    },
    revalidate: 60,
  }
}
