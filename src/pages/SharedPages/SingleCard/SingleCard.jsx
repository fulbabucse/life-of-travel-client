import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const SingleCard = ({ item }) => {
  const { name, img, place_details, price, country, rating } = item;
  console.log(item);

  const imgStyles = {
    width: "100%",
    height: "200px",
  };

  return (
    <div className="card card-compact bg-base-100 rounded-md shadow-xl">
      <figure>
        <img style={imgStyles} src={img} alt={name} />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">
              <FaMapMarkerAlt className="mr-1"></FaMapMarkerAlt>
              {country}
            </div>
          </h2>
          <span className="flex items-center gap-1">
            <FaStar className="text-amber-400"></FaStar> {rating}
          </span>
        </div>
        <p>{place_details.slice(0, 55)}</p>
        <div className="card-actions justify-between items-center">
          <div className="badge badge-outline">Start: {price}</div>
          <button className="btn btn-sm btn-secondary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
