import "../../App.css";
import Particles from "react-tsparticles";
import avatar_1 from "../../assets/avatar-1.png";
import avatar_2 from "../../assets/avatar-2.png";
import avatar_3 from "../../assets/avatar-3.png";
import { loadFull } from "tsparticles";

const Hero = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div id="home" className="relative bg-[#0e0622] lg:py-40">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0 z-0"
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="relative z-30">
        <div className="container mx-auto relative z-10">
          <div className="flex justify-center items-center pb-8 lg:text-center flex-col space-y-14 my-10">
            <h1 className="text-5xl lg:text-8xl font-bold text-white">
              Rwanda&apos;s #1 Trusted <br /> Secure{" "}
              <span className="text-red-700">Solutions</span>
            </h1>
            <div className="lg:w-1/2">
              <p className="text-gray-500 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-4">
              <div className=" text-white rounded-sm p-4 flex items-center h-40 justify-center bg-gradient-to-br from-red-800/70 to-[#0b1d40]">
                <span className="max-w-24 font-semibold text-[18px]">
                  15 years of experience
                </span>
              </div>
              <div
                className=" bg-cover bg-center bg-no-repeat h-[20rem]"
                style={{
                  backgroundImage: `url('${avatar_1}')`,
                }}
              ></div>
            </div>

            <div className="space-y-4">
              <div
                className=" bg-cover bg-center bg-no-repeat h-[20rem]"
                style={{
                  backgroundImage: `url('${avatar_3}')`,
                }}
              ></div>
              <div className=" text-white rounded-sm p-4 flex items-center h-40 justify-center bg-gradient-to-br from-red-800/70 to-[#0b1d40]">
                <span className="max-w-24 font-semibold text-[18px]">
                  35K clients service
                </span>
              </div>
            </div>

            <div className="flex flex-row w-full col-span-2 lg:col-span-1 lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 ">
              <div className=" text-white rounded-sm p-4 flex items-center h-full lg:h-40 w-1/2 lg:w-full justify-center bg-gradient-to-br from-red-800/70 to-[#0b1d40]">
                <span className="max-w-24 font-semibold text-[18px]">
                  5K employees currently
                </span>
              </div>
              <div
                className=" bg-cover bg-center bg-no-repeatt w-1/2 lg:w-full h-[20rem]"
                style={{
                  backgroundImage: `url('${avatar_2}')`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
