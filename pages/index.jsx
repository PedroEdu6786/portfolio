import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Projects from '../src/components/Projects'
import Skills from '../src/components/Skills'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Box mt="8rem" pos="relative" overflow="hidden" mb="4rem">
        <Projects />
        <Skills />
        <About />
        <Contact />
      </Box>
      <Footer />
    </>
  )
}
