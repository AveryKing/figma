import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { Background } from "./components/Background";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Background />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}
