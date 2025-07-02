import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Insights from "./components/Insights";
import Services from "./components/Services";
import CompanyNews from "./components/CompanyNews";
import Partners from "./components/Partners";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import JoinPanel from "./components/JoinPanel";
import News from "./components/News";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Insights />
      <Services />
      <JoinPanel />
      <CompanyNews />
      <News />
      <Partners />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
