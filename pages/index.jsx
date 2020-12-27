import { Box } from '@chakra-ui/react'
import Header from '../src/components/organisms/Header'
import Hero from '../src/components/organisms/Hero'
import Projects from '../src/components/organisms/Projects'
import Skills from '../src/components/organisms/Skills'
import About from '../src/components/organisms/About'
import Contact from '../src/components/organisms/Contact'
import Footer from '../src/components/organisms/Footer'
import SectionLayout from '../src/components/SectionLayout'
import HeaderLayout from '../src/components/HeaderLayout'
import HeroLayout from '../src/components/HeroLayout'
import { LIGHT_BLUE } from '../src/utils/colors'

export default function Home() {
  return (
    <>
      <Box h={{ md: '100vh' }}>
        {/*-------------- HEADER -------------- */}
        <HeaderLayout>
          <Header />
        </HeaderLayout>

        {/*-------------- HERO -------------- */}
        <HeroLayout>
          <Hero />
        </HeroLayout>
      </Box>

      {/*-------------- PROJECTS -------------- */}
      <SectionLayout id="projects" mb={0} px={0}>
        <Projects />
      </SectionLayout>

      {/*-------------- SKILLS -------------- */}
      <SectionLayout id="skills">
        <Skills />
      </SectionLayout>

      {/*-------------- ABOUT -------------- */}
      <Box id="about" my="10rem" bgColor={LIGHT_BLUE} w="100%">
        <SectionLayout>
          <About />
        </SectionLayout>
      </Box>

      {/*-------------- CONTACT -------------- */}
      <SectionLayout id="contact">
        <Contact />
      </SectionLayout>

      {/*-------------- FOOTER -------------- */}
      <Footer />
    </>
  )
}
