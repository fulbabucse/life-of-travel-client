import React from "react";
import { useLoaderData } from "react-router-dom";

const PackageDetails = () => {
  const place = useLoaderData();
  return (
    <div>
      <h1>This is package details page</h1>
    </div>
  );
};

export default PackageDetails;
