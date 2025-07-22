
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Container from "./components/Container";
import Services from "./components/Services";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <div className="bg-black">
      <Container>
        <About />
        <Services />
        <Projects />
        <FAQ />
        <Contact />
      </Container>
    </div>
  );
}
