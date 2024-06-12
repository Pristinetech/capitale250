import { Link } from "react-router-dom";
import image_6_1 from "../../assets/Image_BG_4_1.png";

const Articles = () => {
  return (
    <div className=" relative xz-40  pb-36 pt-10 bg-[#0b0320]">
      <div id="about" className="container mx-auto z-40 py-20 h-fit lg:h-fit">
        <div className="px-4  py-10 mb-5 flex flex-col lg:flex-row justify-between">
          <h1 className="text-4xl font-bold text-red-700">Articles</h1>

          <p className="text-xl text-gray-500  max-w-[36rem] ">
            Please complete the form below, to request a quote, and we{`'`} ll
            be in touch. Or you can call us on 3322 and our specialists will
            provide the necessary help!
          </p>
        </div>
        <div className="grid grid-cols-2 space-x-4">
          <div className="h-full border  border-white border-opacity-25">
            <div
              className=" bg-cover bg-center bg-no-repeat min-h-[24rem]"
              style={{
                backgroundImage: `url('${image_6_1}')`,
              }}
            ></div>
            <div className="p-10 flex flex-col justify-end ">
              <Link to={"/blog-details"}>
                <h1 className="text-2xl font-bold text-white hover:text-blue-600">
                  Navigating the virtual frontier: embracing safety & Comfort
                </h1>
              </Link>

              <p className="text-gray-400">
                Please complete the form below, to request a quote, and we{`'`}{" "}
                ll be in touch. Or you can call us on 3322 and our specialists
                will provide the necessary help!
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-10 flex flex-col justify-end border border-white border-opacity-25">
              <Link to={"/blog-details"}>
                <h1 className="text-2xl font-bold text-white hover:text-blue-600">
                  Navigating the virtual frontier: embracing safety & Comfort
                </h1>
              </Link>

              <p className="text-gray-400">
                Please complete the form below, to request a quote, and we{`'`}{" "}
                ll be in touch. Or you can call us on 3322 and our specialists
                will provide the necessary help!
              </p>
            </div>
            <div className="p-10 flex flex-col justify-end border border-white border-opacity-25">
              <Link to={"/blog-details"}>
                {" "}
                <h1 className="text-2xl font-bold text-white hover:text-blue-600">
                  Navigating the virtual frontier: embracing safety & Comfort
                </h1>
              </Link>

              <p className="text-gray-400">
                Please complete the form below, to request a quote, and we{`'`}{" "}
                ll be in touch. Or you can call us on 3322 and our specialists
                will provide the necessary help!
              </p>
            </div>
            <div className="p-10 flex flex-col justify-end border border-white border-opacity-25">
              <Link to={"/blog-details"}>
                <h1 className="text-2xl font-bold text-white hover:text-blue-600">
                  Navigating the virtual frontier: embracing safety & Comfort
                </h1>
              </Link>

              <p className="text-gray-400">
                Please complete the form below, to request a quote, and we{`'`}{" "}
                ll be in touch. Or you can call us on 3322 and our specialists
                will provide the necessary help!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
