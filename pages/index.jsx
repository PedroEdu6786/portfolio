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
      <SectionLayout mt="2rem" pb="16rem">
        <Hero />
      </SectionLayout>
      <SectionLayout mt="8rem" mb={0} px={0}>
        <Projects />
      </SectionLayout>
      <SectionLayout>
        <Skills />
      </SectionLayout>
      <Box bgColor="portfolio.lightBlue" w="100%">
        <SectionLayout>
          <About />
        </SectionLayout>
      </Box>
      <SectionLayout>
        <Contact />
      </SectionLayout>
      <Footer />
    </>
  )
}
