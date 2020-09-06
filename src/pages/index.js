import Layout from "../components/layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Index = () => {
    return (
        <Layout>
            <Hero />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </Layout>
    );
};

export default Index;
