import { Box } from '@chakra-ui/react'
import Header from '../src/components/organisms/Header'
import Hero from '../src/components/organisms/Hero'
import Projects from '../src/components/organisms/Projects'
import Skills from '../src/components/organisms/Skills'
import About from '../src/components/organisms/About'
import Contact from '../src/components/organisms/Contact'
import Footer from '../src/components/organisms/Footer'
import SectionLayout from '../src/components/SectionLayout'

export default function Home() {
  return (
    <>
      <SectionLayout as="header" p={7} my={0} mx="auto">
        <Header />
      </SectionLayout>
      <SectionLayout
        mt={{ base: '2rem', md: '4rem' }}
        mb={{ md: '6rem' }}
        pb={{ base: '14rem', md: '5rem' }}
        pt={{ md: '4rem' }}
      >
        <Hero />
      </SectionLayout>
      <SectionLayout id="projects" mt="8rem" mb={0} px={0}>
        <Projects />
      </SectionLayout>
      <SectionLayout id="skills">
        <Skills />
      </SectionLayout>
      <Box id="about" py={{ md: '1' }} bgColor="portfolio.lightBlue" w="100%">
        <SectionLayout>
          <About />
        </SectionLayout>
      </Box>
      <SectionLayout id="contact">
        <Contact />
      </SectionLayout>
      <Footer />
    </>
  )
}
