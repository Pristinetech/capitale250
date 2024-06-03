import image_4_1 from "../../assets/Image-4-1.png";
import image_5_1 from "../../assets/Image-5-1.png";
import image_6_1 from "../../assets/Image-6-1.png";
import { TiTick } from "react-icons/ti";
const Services_1 = () => {
  return (
    <div className=" relative z-40  pb-36 pt-10 bg-[#0b0320] text-white">
      <div id="what-we-do" className="container flex flex-col  mx-auto mb-44">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-6">Our Services</h2>
          <p className="mb-12 text-lg max-w-3xl mx-auto">
            ISCO offers integrated security solutions encompassing physical
            security, internet services, and cash management. With a focus on
            excellence and innovation, we provide comprehensive protection for
            your assets, both offline and online. Trust ISCO to safeguard your
            business with our expertly tailored security services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#0c102b] rounded-[32px] overflow-hidden">
              <div className="mb-6">
                <img
                  src={image_4_1}
                  alt="Physical Security"
                  className="w-full h-40 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-4xl text-left font-bold mb-6">
                  Physical Security.
                </h3>
                <hr className="mb-6 opacity-25" />
                <button className="text-white py-2 px-4 rounded-lg border border-white border-opacity-10 mb-6 w-full bg-gradient-to-br from-[#0b0723] to-[#0d1731]">
                  Read More
                </button>
                <div className="text-left mt-2 mb-5">
                  <h4 className="font-bold mb-2">What you will get:</h4>
                  <ul className="xlist-disc list-inside leading-10">
                    <li className="flex items-center gap-2">
                      <TiTick className="border rounded-full" />
                      Security Officers
                    </li>
                    <li className="flex items-center gap-2">
                      <TiTick className="border rounded-full" />
                      Surveillance officers
                    </li>
                    <li className="flex items-center gap-2">
                      <TiTick className="border rounded-full" />
                      Alarm system
                    </li>
                    <li className="flex items-center gap-2">
                      <TiTick className="border rounded-full" />
                      Event protection
                    </li>
                    <li className="flex items-center gap-2 leading-none">
                      <TiTick className="border rounded-full" />
                      In-transit Security for moving assets
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#0c102b] rounded-[32px] overflow-hidden">
              <div className="mb-6">
                <img
                  src={image_5_1}
                  alt="Physical Security"
                  className="w-full h-40 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-4xl text-left font-bold mb-6">
                  Internet services.
                </h3>
                <hr className="mb-6 opacity-25" />
                <button className="text-white py-2 px-4 rounded-lg border border-white border-opacity-10 mb-6 w-full bg-gradient-to-br from-[#0b0723] to-[#0d1731]">
                  Read More
                </button>
                <div className="text-left mt-2 mb-5">
                  <h4 className="font-bold mb-2">What you will get:</h4>
                  <ul className="xlist-disc list-inside leading-10">
                    <li className="flex items-center gap-2">
                      <TiTick className="border rounded-full" />
                      Lorem Ipsum
                    </li>
                    <li className="flex items-center gap-2">
                      <TiTick className="border rounded-full" />
                      Lorem Ipsum
                    </li>
                    <li className="flex items-center gap-2">
                      <TiTick className="border rounded-full" />
                      Lorem Ipsum
                    </li>
                    <li className="flex items-center gap-2">
                      <TiTick className="border rounded-full" />
                      Lorem Ipsum
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#0c102b] rounded-[32px] overflow-hidden">
              <div className="mb-6">
                <img
                  src={image_6_1}
                  alt="Physical Security"
                  className="w-full h-40 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-4xl text-left font-bold mb-6">
                  Cash <br /> services.
                </h3>
                <hr className="mb-6 opacity-25" />
                <button className="text-white py-2 px-4 rounded-lg border border-white border-opacity-10 mb-6 w-full bg-gradient-to-br from-[#0b0723] to-[#0d1731]">
                  Read More
                </button>
                <div className="text-left mt-2 mb-5">
                  <h4 className="font-bold mb-2">What you will get:</h4>
                  <ul className="xlist-disc list-inside leading-10">
                    <li className="flex items-center gap-2">
                      <TiTick className="border rounded-full" />
                      Cash in Transit
                    </li>
                    <li className="flex items-center gap-2">
                      <TiTick className="border rounded-full" />
                      Cash processing
                    </li>
                    <li className="flex items-center gap-2">
                      <TiTick className="border rounded-full" />
                      ATM loading services
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services_1;
