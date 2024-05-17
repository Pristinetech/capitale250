import image_6_1 from "../../assets/Image_BG_4_1.png";

const Testimonials = () => {
  return (
    <div className=" relative z-40  pb-36 pt-10 bg-[#0b0320]">
      <div id="about" className="container mx-auto py-20 h-[130rem] lg:h-fit">
        <div className="px-4  py-10 flex flex-col lg:flex-row justify-between">
          <h1 className="text-4xl font-bold text-red-700">Testimonials</h1>
          <p className="text-xl text-gray-500  max-w-[36rem] ">
            Please complete the form below, to request a quote, and we{`'`} ll
            be in touch. Or you can call us on 3322 and our specialists will
            provide the necessary help!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 my-10 lg:h-[30rem]">
          <div
            className="lg:col-span-2 bg-cover bg-center bg-no-repeat min-h-[30rem] border-r border-l border-t border-white border-opacity-25 lg:border-none"
            style={{
              backgroundImage: `url('${image_6_1}')`,
            }}
          ></div>
          <div className="p-10 flex flex-col justify-end pb-16 border-b border-l border-r lg:border-t border-white border-opacity-25">
            <p className="text-gray-600">
              Please complete the form below, to request a quote, and we{`'`} ll
              be in touch. Or you can call us on 3322 and our specialists will
              provide the necessary help!
            </p>
            <div className="leading-tight my-4">
              <p className="text-2xl text-red-600 font-bold mb-2">
                Pascal Bazera{" "}
              </p>
              <span className="text-white font-semibold">CEO at RDb</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[24rem]">
          <div className="p-10 flex flex-col justify-end pb-16 border border-white border-opacity-25">
            <h1 className="text-7xl font-bold text-white">{`"`}</h1>

            <p className="text-gray-400">
              Please complete the form below, to request a quote, and we{`'`} ll
              be in touch. Or you can call us on 3322 and our specialists will
              provide the necessary help!
            </p>
            <div className="leading-tight my-4">
              <p className="text-2xl text-red-600 font-bold mb-2">
                Pascal Bazera{" "}
              </p>
              <span className="text-white font-semibold">CEO at RDb</span>
            </div>
          </div>
          <div className=" p-10 flex flex-col justify-end pb-16 border border-white border-opacity-25">
            <h1 className="text-7xl font-bold text-white">{`"`}</h1>
            <p className="text-gray-600">
              Please complete the form below, to request a quote, and we{`'`} ll
              be in touch. Or you can call us on 3322 and our specialists will
              provide the necessary help!
            </p>
            <div className="leading-tight my-4">
              <p className="text-2xl text-red-600 font-bold mb-2">
                Pascal Bazera{" "}
              </p>
              <span className="text-white font-semibold">CEO at RDb</span>
            </div>
          </div>
          <div className="p-10 flex flex-col justify-end pb-16 border  border-white border-opacity-25">
            <h1 className="text-7xl font-bold text-white">{`"`}</h1>
            <p className="text-gray-600">
              Please complete the form below, to request a quote, and we{`'`} ll
              be in touch. Or you can call us on 3322 and our specialists will
              provide the necessary help!
            </p>
            <div className="leading-tight my-4">
              <p className="text-2xl text-red-600 font-bold mb-2">
                Pascal Bazera{" "}
              </p>
              <span className="text-white font-semibold">CEO at RDb</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
