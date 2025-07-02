import "./App.css";
import Hero from "./components/Hero";
import About from "./components/archive/About";
import Navbar from "./components/Navbar";
import Insights from "./components/Insights";
import Services from "./components/Services";
import CompanyNews from "./components/CompanyNews";
import Partners from "./components/Partners";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Insights />
      <Services />
      <CompanyNews />
      <Partners />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
