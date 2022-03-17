import React from "react";

const CardHeader = (props) => {
  return (
    <div class="row">
      <div class="col-8">
        <h1>{props.bdd.name}</h1>
      </div>
      <div class="col-4">
        <div>
          {props.bdd.platforms.map((element) => {
            return (
              <div key={element.slug}>
                <img src={element.platform_logo.url} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
