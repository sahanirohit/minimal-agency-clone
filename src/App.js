import Navbar from "./Components/Navbar";
import Top from "./Components/Top";
import Hero from "./Components/Hero.jsx";
import "./index.css";
import WhyUs from "./Components/WhyUs";
import About from "./Components/About";
import Why from "./Components/Why";

function App() {
  return (
    <div className="App">
      <Top />
      <Navbar />
      <Hero />
      <WhyUs />
      <About />
      <Why />
      <div className="h-[2000px]"></div>
    </div>
  );
}

export default App;
