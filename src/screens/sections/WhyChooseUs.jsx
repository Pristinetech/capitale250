const WhyChooseUs = () => {
  return (
    <div className="flex flex-wrap py-16 bg-[#160541]  min-h-[80rem] lg:min-h-fit lg:h-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between my-20">
          <h2 className="text-4xl font-semibold max-w-72 text-red-600 mb-8 text-start">
            More Reasons to Choose Us!
          </h2>
          <p className="text-gray-400 max-w-[36rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-80">
          <div className="bg-[#120533] shadow-md p-10 flex flex-col justify-end pb-16">
            <div className="text-2xl text-red-600 font-bold mb-4">
              Reliability
            </div>
            <p className="text-gray-400">
              Our services are backed by a reliable infrastructure, ensuring
              smooth operations.
            </p>
          </div>
          <div className=" p-10 flex flex-col justify-end pb-16 border border-red-500">
            <div className="text-2xl text-red-600 font-bold mb-4">Quality</div>
            <p className="text-gray-600">
              We deliver top-notch quality products that exceed customer
              expectations.
            </p>
          </div>
          <div className="p-10 flex flex-col justify-end pb-16 border border-red-500">
            <div className="text-2xl text-red-600 font-bold mb-4">Support</div>
            <p className="text-gray-600">
              Our dedicated support team is available 24/7 to assist you
              whenever needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
