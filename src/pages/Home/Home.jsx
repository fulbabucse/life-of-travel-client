import React from "react";
import "./Home.css";
import Typed from "react-typed";
import SliderSwiper from "../SharedPages/SliderSwiper/SliderSwiper";
import CountUp from "react-countup";

const Home = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="px-2 lg:px-20">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold lg:mt-8 text-amber-300/90">
          Bangladesh's Coolest Travel Community
        </h1>
        <span className="text-2xl font-semibold my-3 text-amber-300">
          <Typed
            strings={[
              "A World Within A State Apart",
              "Asia",
              "Europe",
              "North America",
              "South America",
              "Africa",
              "Oceania",
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
          ></Typed>
        </span>
        <div className="w-2/4">
          <form
            onSubmit={handleSearch}
            className="bg-white/20 transition-colors duration-500 hover:shadow-2xl font-bold py-2 pl-5 pr-2 rounded-full w-full flex justify-between"
          >
            <input
              className="bg-transparent text-white outline-none text-2xl w-full"
              type="text"
              placeholder="Where do you wanna go?"
            />
            <button className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded-full">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="py-6">
        <h3 className="text-center text-white/70 text-2xl font-semibold pb-3">
          Countries/regions open for travel from Bangladesh
        </h3>
        <SliderSwiper></SliderSwiper>
      </div>

      <div className="flex justify-center gap-10 pb-6">
        <div className="text-2xl font-bold text-center text-amber-400/90">
          <CountUp start={0} end={2600} duration={5} delay={0}></CountUp>+
          <h3>Happy Travellers</h3>
        </div>
        <div className="text-2xl font-bold text-center text-amber-400/90">
          <CountUp start={0} end={300} duration={5} delay={0}></CountUp>+
          <h3>Memorable Tours</h3>
        </div>
        <div className="text-2xl font-bold text-center text-amber-400/90">
          <CountUp start={0} end={100} duration={5} delay={0}></CountUp>%
          <h3>Reliable</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
