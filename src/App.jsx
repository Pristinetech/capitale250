import "./App.css";
import Navbar from "./components/Navbar";
import About from "./screens/sections/About";
import ContactUs from "./screens/sections/ContactUs";
import Hero from "./screens/sections/Hero";
import Services from "./screens/sections/Services";
import Testimonials from "./screens/sections/Testimonials";
import WhyChooseUs from "./screens/sections/WhyChooseUs";

function App() {
  return (
    <div className="bg-[#0b0320]">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About section */}
      <About />

      {/* About section */}
      <Services />

      {/* Reasons to choose us */}
      <WhyChooseUs />

      {/* Contact and request quotation */}
      <ContactUs />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}

export default App;
