import "./App.css";
import Navbar from "./components/Navbar";
import About from "./screens/sections/About";
import Articles from "./screens/sections/Articles";
import ContactUs from "./screens/sections/ContactUs";
import Footer from "./screens/sections/Footer";
import Hero from "./screens/sections/Hero";
import Services from "./screens/sections/Services";
import Subscribe from "./screens/sections/Subscribe";
import Testimonials from "./screens/sections/Testimonials";
import WhyChooseUs from "./screens/sections/WhyChooseUs";

function App() {
  return (
    <div className="relative bg-[#0b0320]">
      <div className="relative z-40">
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

        {/* Articles */}
        <Articles />

        {/* Subscribe */}
        <Subscribe />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
