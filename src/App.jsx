import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact/Contact";
import Experience from "./Pages/Experience/Experience";

import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Skills from "./Pages/Skills/Skills";
import About from "./Pages/about/About";
// import './index.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
