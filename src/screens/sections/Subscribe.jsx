const Subscribe = () => {
  return (
    <div className="bg-red-600 flex justify-center items-center p-4 py-14 relative z-40">
      <div className="container flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0">
        <span className="text-white font-[1000] text-2xl">
          Receive instant updates from us
        </span>
        <div className="flex items-center h-[4rem]">
          <input
            type="text"
            placeholder="Enter your email"
            className="px-4 py-2 w-[25rem] h-full rounded-l-md focus:outline-none"
          />
          <button className="bg-blue-900 h-full text-white px-4 py-2 rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
