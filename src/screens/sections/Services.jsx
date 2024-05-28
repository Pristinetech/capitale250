import image_4_1 from "../../assets/Image-4-1.png";
import image_5_1 from "../../assets/Image-5-1.png";
import image_6_1 from "../../assets/Image-6-1.png";
const Services = () => {
  return (
    <div className=" relative z-40  pb-36 pt-10 bg-[#0b0320]">
      <div id="what-we-do" className="container flex flex-col  mx-auto mb-44">
        <h1 className=" text-white text-4xl font-bold mb-10">
          Solutions from your Security
        </h1>
        <div className="grid lg:grid-cols-5 gap-8 mb-24">
          <div
            className="relative bg-cover bg-center bg-no-repeat h-[42rem]"
            style={{
              backgroundImage: `url('${image_4_1}')`,
            }}
          >
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0b0320] via-[#0b0320]/75 to-transparent p-4">
              <h2 className="text-white text-2xl font-bold mb-2">
                Security
                <br /> services
              </h2>
            </div>
          </div>
          <div
            className="relative bg-cover bg-center bg-no-repeat lg:col-span-3 h-[42rem]"
            style={{
              backgroundImage: `url('${image_5_1}')`,
            }}
          >
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0b0320] via-[#0b0320]/75 to-transparent p-4">
              <h2 className="text-white text-2xl font-bold mb-2">
                Internet
                <br /> services
              </h2>
            </div>
          </div>
          <div
            className="relative bg-cover bg-center bg-no-repeat h-[42rem]"
            style={{
              backgroundImage: `url('${image_6_1}')`,
            }}
          >
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0b0320] via-[#0b0320]/75 to-transparent p-4">
              <h2 className="text-white text-2xl font-bold mb-2">
                Cash
                <br /> services
              </h2>
            </div>
          </div>
        </div>

        <section className="grid lg:grid-cols-3 gap-4">
          <div className="bg-[#10052f] min-h-72">
            <h3 className="text-xl font-bold text-white mb-2C bg-[#160641] p-4">
              <span className="text-red-800">Security</span> Services
            </h3>
            <p className="text-gray-700 p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
          <div className="bg-[#0b0320] min-h-72 border border-[#160641]">
            <h3 className="text-xl font-bold text-white mb-2C bg-[#160641] p-4 ">
              <span className="text-red-800">Cash</span> Services
            </h3>
            <p className="text-gray-700 p-4">
              ISCO delivers a comprehensive cash management solution to
              financial institutions and clients in Rwanda. Cash Services are
              best suited for the financial and retail sector looking for a
              hassle-free solution that helps banks and other retail customers
              to reduce risks pertaining to cash management, and focus on their
              core business.
            </p>
          </div>
          <div className="bg-[#0b0320] min-h-72 border border-[#160641]">
            <h3 className="text-xl font-bold text-white mb-2C bg-[#160641] p-4 ">
              <span className="text-red-800">Internet</span> Services
            </h3>
            <p className="text-gray-700 p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
