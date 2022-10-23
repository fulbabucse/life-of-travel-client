import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCard from "../../SharedPages/SingleCard/SingleCard";

const Local = () => {
  const [showMore, setShowMore] = useState(5);
  const packageData = useLoaderData();
  const packages = packageData.slice(0, showMore);
  const handleShowMore = () => {
    setShowMore(showMore + showMore);
  };
  return (
    <div className="px-2 lg:px-20 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-3 gap-4">
        {packages.map((item) => (
          <SingleCard key={item.id} item={item}></SingleCard>
        ))}
      </div>
      {packages.length >= 5 && (
        <div className="pt-4 text-center">
          <button
            onClick={handleShowMore}
            className="btn btn-sm btn-primary rounded-sm"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Local;
