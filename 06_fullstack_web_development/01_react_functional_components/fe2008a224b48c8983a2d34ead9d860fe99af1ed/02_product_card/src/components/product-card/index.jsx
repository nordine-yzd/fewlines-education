import React from "react";
// import CardBody from "./body";
import zelda from "../../../data/zelda";
import CardHeader from "./header.jsx";

const ProductCard = () => {
  return (
    <div className="card-body">
      <CardHeader bdd={zelda} />
      {/* <CardBody bdd={zelda} /> */}
    </div>
  );
};
export default ProductCard;
