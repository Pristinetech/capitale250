import "./App.css";
import Navbar from "./components/Navbar";
import About from "./screens/sections/About";
import Articles from "./screens/sections/Articles";
import ContactUs from "./screens/sections/ContactUs";
import Footer from "./screens/sections/Footer";
import Hero from "./screens/sections/Hero";
// import Services from "./screens/sections/Services";
import Services_1 from "./screens/sections/Services_1";
import Subscribe from "./screens/sections/Subscribe";
import Testimonials from "./screens/sections/Testimonials";
// import WhyChooseUs from "./screens/sections/WhyChooseUs";
import WhyChooseUs_1 from "./screens/sections/WhyChooseUs_1";

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
        <Services_1/>
        {/* <Services /> */}

        {/* Reasons to choose us */}
        <WhyChooseUs_1 />
        {/* <WhyChooseUs /> */}

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
