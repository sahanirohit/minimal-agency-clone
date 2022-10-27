import Navbar from "./Components/Navbar";
import Top from "./Components/Top";
import Hero from "./Components/Hero.jsx";
import "./index.css";
import WhyUs from "./Components/WhyUs";
import About from "./Components/About";
import Why from "./Components/Why";
import Testimonials from "./Components/Testimonials";
import Team from "./Components/Team";
import Clients from "./Components/Clients";
import Blog from "./Components/Blog";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";

// import pages components
import AboutUs from "./Components/Pages/AboutUs";
import { Routes, Route } from "react-router-dom";
import ServicePage from "./Components/Pages/ServicePage";
import BlogPage from "./Components/Pages/BlogPage";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Top />
              <Navbar />
              <Hero />
              <WhyUs />
              <About />
              <Why />
              <Testimonials />
              <Team />
              <Clients />
              <Blog />
              <CTA />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Top />
              <Navbar />
              <AboutUs title="About Us" />
              <About />
              <Why />
              <Testimonials />
              <Team />
              <Clients />
              <CTA />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Top />
              <Navbar />
              <AboutUs title="Our Servies" />
              <ServicePage />
              <Testimonials />
              <Team />
              <Clients />
              <CTA />
              <Footer />
            </>
          }
        />
        <Route
          path="/teams"
          element={
            <>
              <Top />
              <Navbar />
              <AboutUs title="Our Teams" />
              <Team />
              <Clients />
              <CTA />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Top />
              <Navbar />
              <BlogPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/testimonials"
          element={
            <>
              <Top />
              <Navbar />
              <AboutUs title="Testimonials" />
              <Testimonials />
              <Team />
              <Clients />
              <CTA />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Top />
              <Navbar />
              <AboutUs title="Contact Us" />
              <Contact />
              <CTA />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
