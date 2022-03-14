import React from "react";
import CardBody from "./body";
import zelda from "../../../data/zelda";
import CardHeader from "./header.jsx";

const ProductCard = () => {
  return (
    // <header>
    //   <div class="card-body">{CardHeader(zelda)}</div>
    // </header>
    // eslint-disable-next-line react/no-unknown-property
    <div class="card-body">{CardBody(zelda)}</div>
  );
};
export default ProductCard;
