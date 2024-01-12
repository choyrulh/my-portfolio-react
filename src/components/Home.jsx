import HeroSection from "./Hero/HeroSection";
import Border from "./Border";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

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
