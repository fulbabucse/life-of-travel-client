import React from "react";
import "./Home.css";
import { FaSearch } from "react-icons/fa";

import InternationalCarousel from "../SharedPages/Carousel/InternationalCarousel/InternationalCarousel";
import CountUp from "react-countup";
import LocalCarousel from "../SharedPages/Carousel/LocalCarousel/LocalCarousel";

const Home = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="px-2 lg:px-20">
      <div className="flex flex-col items-center">
        <h1 className="text-xl lg:text-3xl font-bold lg:mt-8 text-amber-300/90">
          Bangladesh's Coolest Travel Community
        </h1>
        <span className="text-sm lg:text-xl font-semibold my-1 lg:my-3 text-amber-300">
          A World Within A State Apart
        </span>
        <div className="lg:w-2/4">
          <form
            onSubmit={handleSearch}
            className="bg-cyan-500/60 transition-colors duration-500 hover:shadow-2xl font-bold py-2 pl-5 pr-2 rounded-full w-full flex justify-between"
          >
            <input
              className="search-field bg-transparent text-white outline-none lg:text-xl w-full"
              type="text"
              placeholder="Where do you wanna go?"
            />
            <button className="text-white lg:text-2xl font-bold lg:py-3 px-1 lg:px-4 rounded-full">
              <FaSearch></FaSearch>
            </button>
          </form>
        </div>
      </div>

      <div className="py-6">
        <h3 className="text-white lg:text-2xl font-semibold">
          International trip from Bangladesh
        </h3>
        <p className="text-white">
          The world is a book and those who do not travel read only one page.
        </p>
        <InternationalCarousel></InternationalCarousel>
      </div>

      <div className="py-6">
        <h3 className="text-white lg:text-2xl font-semibold">
          Travel like Local
        </h3>
        <p className="text-white">
          Here are some popular nearby destinations to get you started
        </p>
        <LocalCarousel></LocalCarousel>
      </div>

      <div className="flex justify-center gap-10 pb-6">
        <div className="lg:text-2xl font-bold text-center text-amber-400/90">
          <CountUp start={0} end={2600} duration={3} delay={0}></CountUp>+
          <h3>Happy Travellers</h3>
        </div>
        <div className="lg:text-2xl font-bold text-center text-amber-400/90">
          <CountUp start={0} end={300} duration={3} delay={0}></CountUp>+
          <h3>Memorable Tours</h3>
        </div>
        <div className="lg:text-2xl font-bold text-center text-amber-400/90">
          <CountUp start={0} end={100} duration={3} delay={0}></CountUp>%
          <h3>Reliable</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
