import React from "react";
import { useLoaderData } from "react-router-dom";

const PackageDetails = () => {
  const packageData = useLoaderData();
  console.log(packageData);
  return (
    <div className="text-white">
      <h1>This package detail page</h1>
    </div>
  );
};

export default PackageDetails;
