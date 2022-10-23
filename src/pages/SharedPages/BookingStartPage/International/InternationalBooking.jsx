import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../Header/Header";

const InternationalBooking = () => {
  const place = useLoaderData();
  const { name, img, country, place_details, price, rating, service_fee } =
    place;
  console.log(place);

  const backgroundStyle = {
    width: "100%",
    minHeight: "768px",
    position: "absolute",
    top: "0",
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "darken",
    backgroundColor: "rgba(0,0,0,0.6)",
  };

  return (
    <div style={backgroundStyle}>
      <Header></Header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-24 px-2 lg:px-20">
        <div className="text-center lg:text-start">
          <h3 className="text-xl lg:text-5xl lg:text-start font-bold text-white uppercase">
            {name} <span className="text-sm lg:text-xl">{country}</span>
          </h3>
          <p className="text-white mt-2 text-md">{place_details}</p>
        </div>
        <div className="w-full lg:w-3/4 mx-auto">
          <div className="relative flex flex-col justify-center overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
              <form>
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Origin
                  </label>
                  <input
                    type="text"
                    name="from-destination"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                </div>

                <div className="flex justify-between">
                  <div className="mb-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      From
                    </label>
                    <input
                      type="date"
                      name="from-destination"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      To
                    </label>
                    <input
                      type="date"
                      name="from-destination"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Start Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalBooking;
