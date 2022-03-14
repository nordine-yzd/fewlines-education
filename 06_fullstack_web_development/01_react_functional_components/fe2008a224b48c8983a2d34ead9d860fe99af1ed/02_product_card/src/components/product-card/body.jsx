import React from "react";

const CardBody = (props) => {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <div>
      <h1>{props.first_release_date}</h1>
      <h1>{props.name}</h1>
      <h1>{props.summary}</h1>
    </div>
  );
};

export default CardBody;
