import Navbar from "./Components/Navbar";
import Top from "./Components/Top";
import Hero from "./Components/Hero.jsx";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Top />
      <Navbar />
      <Hero />
      <div className="">Hello</div>
      <div className="h-[2000px]"></div>
    </div>
  );
}

export default App;
