import Navbar from "../components/Navbar";
import OceanWave from "../components/OceanWave";
import About from "./sections/About";
import Articles from "./sections/Articles";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Services_1 from "./sections/Services_1";
import Subscribe from "./sections/Subscribe";
import Testimonials from "./sections/Testimonials";
import WhyChooseUs_1 from "./sections/WhyChooseUs_1";

const Home = () => {
  return (
    <div className="relative bg-[#0b0320]">
      <div className="relative z-40">
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* About section */}
        <About />

        {/* About section */}
        <Services_1 />
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
};

export default Home;
