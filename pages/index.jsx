import { Box } from '@chakra-ui/react'
import Header from '../src/components/organisms/Header'
import Hero from '../src/components/organisms/Hero'
import Projects from '../src/components/organisms/Projects'
import Skills from '../src/components/organisms/Skills'
import About from '../src/components/organisms/About'
import Contact from '../src/components/organisms/Contact'
import Footer from '../src/components/organisms/Footer'
import SectionLayout from '../src/components/SectionLayout'
import HeroLayout from '../src/components/HeroLayout'
import { LIGHT_BLUE, WHITE } from '../src/utils/colors'

export default function Home() {
  return (
    <Box bgColor={WHITE}>
      <Box h={{ md: '100vh' }}>
        {/*-------------- HEADER -------------- */}
        <SectionLayout as="section" h="6rem" p={7} my={0} mx="auto">
          <Header />
        </SectionLayout>

        {/*-------------- HERO -------------- */}
        <HeroLayout as="section" mb={{ md: '6rem' }} pb={{ base: '14rem' }}>
          <Hero />
        </HeroLayout>
      </Box>

      {/*-------------- PROJECTS -------------- */}
      <SectionLayout as="section" id="projects" mt="8rem" mb={0} px={0}>
        <Projects />
      </SectionLayout>

      {/*-------------- SKILLS -------------- */}
      <SectionLayout as="section" id="skills">
        <Skills />
      </SectionLayout>

      {/*-------------- ABOUT -------------- */}
      <Box id="about" py={{ md: '1' }} bgColor={LIGHT_BLUE} w="100%">
        <SectionLayout as="section">
          <About />
        </SectionLayout>
      </Box>

      {/*-------------- CONTACT -------------- */}
      <SectionLayout as="section" id="contact">
        <Contact />
      </SectionLayout>

      {/*-------------- FOOTER -------------- */}
      <Footer />
    </Box>
  )
}
