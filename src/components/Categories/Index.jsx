import React from "react";
import FeatureCard from "../FeatureCard/Index";

const categories = [
  { id: 1, name: `women's clothing` },
  { id: 2, name: `men's clothing` },
  { id: 3, name: `electronics` },
  { id: 4, name: `jewelery` },
];

function Categories() {
  return (
    <>
      <FeatureCard cards={categories} />
    </>
  );
}

export default Categories;
