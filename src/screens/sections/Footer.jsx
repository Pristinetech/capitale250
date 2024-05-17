import IscoLogo from "../../assets/isco-icon.svg";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className=" relative z-40  pb-36 pt-10 bg-[#0b0320]">
      <footer className="text-white pb-52 pt-56">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="mb-8 lg:mb-0">
              <img
                src={IscoLogo}
                alt="ISCO Security"
                className="h-[75px] mb-4"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-16 border-b pb-5">
              <div className="mb-8 lg:mb-0">
                <h4 className="font-bold text-2xl mb-4">Menu</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-white hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:underline">
                      Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:underline">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:underline">
                      Articles
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-8 lg:mb-0">
                <h4 className="font-bold text-2xl mb-4">Headquarters</h4>
                <address className="not-italic space-y-2">
                  <p>KN 3 Road, Ruganwa1 - Gikondo</p>
                  <p>P.O.Box 2641 Kigali, Rwanda</p>
                  <p>info@isco.co.rw</p>
                  <p>Tel: 3031</p>
                </address>
              </div>
              <div>
                <h4 className="font-bold text-2xl mb-4">General Inquiries</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-4">
                    <span className=" border p-2 rounded-full">
                      <FaPhoneAlt />
                    </span>
                    <a href="tel:3031" className="text-white underline">
                      3031
                    </a>
                  </li>
                  <li className="flex items-end  space-x-4">
                    <span className=" border p-2 rounded-full">
                      <IoIosMail />
                    </span>
                    <div className="">
                      <h4 className="font-bold text-2xl">Email Us</h4>
                      <a
                        href="mailto:info@isco.co.rw"
                        className="text-white underline"
                      >
                        info@isco.co.rw
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-3 flex lg:justify-end space-x-4">
            <a href="#" className="text-white border p-2 rounded-full">
              <FaTwitter />
            </a>
            <a href="#" className="text-white border p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white border p-2 rounded-full">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
