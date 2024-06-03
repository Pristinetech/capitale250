import { GoGoal } from "react-icons/go";
import Eye from "../../assets/Eye.svg";

const About = () => {
  return (
    <div className=" relative z-40  pb-36 pt-10 bg-[#0b0320]">
      <div
        id="about"
        className="container mx-auto px-4 flex flex-col text-center xlg:flex-row xjustify-between space-y-14"
      >
        <h1 className="text-4xl font-bold text-red-700">About Us</h1>
        <p className="text-xl mx-auto text-center text-gray-500  max-w-[47rem]">
          ISCO Security Services offers tailored and cutting-edge security
          solutions to meet the unique needs of every client. With over 29 years
          of expertise in the African security sector, we{`'`}re dedicated to
          expanding our presence continent-wide. ......
        </p>
      </div>
      <div>
        <section className="text-white py-12">
          <div className="container mx-auto flex flex-col md:flex-row  items-center">
            {/* Mission and Vision */}
            <div className="mb-12 md:mb-0 flex-1">
              <div className="max-w-md">
                <div className="mb-8">
                  <div className="flex items-center mb-4 gap-5">
                    <GoGoal size={61} color="#ed1c24" />
                    <h2 className="text-4xl font-bold text-[#ed1c24]">
                      Mission:
                    </h2>
                  </div>
                  <p className="text-lg">
                    To provide specialized security services that exceed
                    customers’ expectations.
                  </p>
                </div>
                <hr className="opacity-10 mb-6"/>
                <div>
                  <div className="flex items-center mb-4">
                    <img
                      src={Eye}
                      alt="Vision"
                      className="w-[61px] h-[61px] mr-4"
                    />
                    <h2 className="text-4xl font-bold text-[#ed1c24]">
                      Vision:
                    </h2>
                  </div>
                  <p className="text-lg">
                    To be the preferred security provider in Rwanda with the
                    most reliable security services.
                  </p>
                </div>
              </div>
            </div>
            {/* Timeline */}
            <div className="xmax-w-md flex-1 ">
              <div className="w-fit pl-5 pr-20 py-10 bg-gradient-to-br from-[#a11821]/90 to-[#0d1731]">
                {[
                  {
                    year: "1995",
                    description:
                      "ISCO became the first private security company in Rwanda.",
                  },
                  {
                    year: "2012",
                    description:
                      "ISCO started providing cash services to its customers: and launched cash transportation services.",
                  },
                  {
                    year: "2015",
                    description:
                      "ISCO launched new business lines: Logistics & Courier Services and ISCO ISP.",
                  },
                  {
                    year: "2020",
                    description:
                      "Focus on technology and automation in security services and spin off logistics business line.",
                  },
                  {
                    year: "2022",
                    description:
                      "Launch of ISCO Academy and up-skilling of 1000+ security officers p.a",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-10 mb-8 ml-6 max-w-md"
                  >
                    {/* <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -left-1.5 border border-white"></div> */}
                    <time className="block mb-2 text-4xl font-bold text-white">
                      {item.year}
                    </time>
                    <p className="text-lg pb-2 border-b border-white border-opacity-10">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
