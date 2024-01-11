import About from "./components/About/About";
import HeroSection from "./components/Hero/HeroSection";
import Footer from "./Footer";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Border from "./Border";

function Home() {
  return (
    <div className="overflow-hidden ">
      <HeroSection />
      <Border />
      <About />
      <Border />
      <Skills />
      <Border />
      <Projects />
      <Border />
      <Contact />
      <Border />
      <Footer />
    </div>
  );
}

export default Home;
