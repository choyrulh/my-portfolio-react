import About from "./components/About/About";
import HeroSection from "./components/Hero/HeroSection";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Border from "./Border";
import Resume from "./components/Resume/Resume";

function Home() {
  return (
    <div className="overflow-hidden ">
      <HeroSection />
      <Border />
      <About />
      <Border />
      <Resume />
      <Border />
      <Skills />
      <Border />
      <Projects />
      <Border />
      <Contact />
    </div>
  );
}

export default Home;
