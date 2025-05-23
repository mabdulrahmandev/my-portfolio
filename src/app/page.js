
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <Container>
          <About />
          <Services />
          <Projects />
          <Contact />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
