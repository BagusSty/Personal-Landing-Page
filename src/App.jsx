import "./App.css";
import About from "./components/Elements/About";
import Contact from "./components/Elements/Contact";
import Navbar from "./components/Elements/Navbar";
import Overview from "./components/Elements/Overview";
import Projects from "./components/Elements/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Overview/>
      <About/>
      <Projects/>
      <Contact/>
      {/* Copyright */}
      <div className="text-center p-4">© 2024 Copyright: Bagus Setyo Nurcahyo </div>
    </div>
  );
}

export default App;
