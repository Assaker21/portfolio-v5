import About from "./components/About/about.component";
import Footer from "./components/Footer/footer.component";
import Navbar from "./components/Navbar/navbar.component";
import Projects from "./components/Projects/projects.component";

export default function App() {
  return (
    <>
      <Navbar />
      <Footer />
      <div className="background" />
      <About />
      <Projects />
    </>
  );
}
