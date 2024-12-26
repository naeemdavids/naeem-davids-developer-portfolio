import About from "./components/About";
import Introduction from "./components/Introduction";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      {/*Placed the Navbar here so the links could work properly, had to make use of "id" since all links went to the same page. */}
      <main>
        <Introduction />
        <section id="ABOUT">
          <About />
        </section>
        <section id="PROJECTS">
          <Projects />
        </section>
        <section id="CONTACT">
          <Contact />
        </section>
      </main>
    </>
  );
}
