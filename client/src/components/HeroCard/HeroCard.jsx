import React from "react";
import wave from "../../assets/wave Gif.gif";
import { FaReact } from "react-icons/fa";
import { FaRocket, FaSatellite } from "react-icons/fa6";

const ServiceData = [
  {
  title: "Hubble Space Telescope",
  content: "300-1500km",
  description: "Captures breathtaking images of distant galaxies and nebulae.",
  icon: <FaReact className="text-7xl" />,
  aosDelay: "300",
},
{
  title: "International Space Station",
  content: "500-1500km",
  description: "A habitable laboratory orbiting Earth, conducting vital research.",
  icon: <FaRocket className="text-7xl" />,
  aosDelay: "500",
},
{
  title: "GPS Satellite",
  content: "300-1500km",
  description: "Enables precise navigation and positioning worldwide.",
  icon: <FaSatellite className="text-7xl" />,
  aosDelay: "700",
}

];
const HeroCard = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-[#0c4a6e]/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"


                    >
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-20">
              <img
                src={wave}
                alt=""
                className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
              />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;