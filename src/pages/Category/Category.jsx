import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCard from "../SharedPages/SingleCard/SingleCard";

const Category = () => {
  const categoryData = useLoaderData();
  return (
    <div className="px-2 lg:px-20 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-3 gap-4">
        {categoryData.map((item) => (
          <SingleCard key={item.id} item={item}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
