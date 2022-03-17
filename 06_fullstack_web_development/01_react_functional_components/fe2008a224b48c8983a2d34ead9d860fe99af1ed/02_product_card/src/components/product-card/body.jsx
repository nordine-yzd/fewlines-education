import React from "react";

const CardBody = (props) => {
  const [count, setCount] = React.useState(0);
  if (count === 0 || count % 2 === 0) {
    return (
      <div>
        <div class="row">
          <div class="col ">
            <img src={props.bdd.cover.url} alt={props.bdd.name} />
          </div>
          <div class="col">
            <p>Release Date : {props.bdd.first_release_date}</p>

            <div>
              {props.bdd.genres.map((element) => {
                <div key={element.name}>
                  <p>{element.name}</p>
                </div>;
              })}
            </div>
            <div>
              <p>{props.bdd.summary}</p>
            </div>
          </div>
        </div>
        <div>
          <button onClick={() => setCount(count + 1)}>shows screenshots</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div class="row">
          <div class="col ">
            <img src={props.bdd.cover.url} alt={props.bdd.name} />
          </div>
          <div class="col">
            <p>Release Date : {props.bdd.first_release_date}</p>
            <div>
              {props.bdd.genres.map((element) => {
                <div key={element.name}>
                  <p>{element.name}</p>
                </div>;
              })}
            </div>
            <div>
              <p>{props.bdd.summary}</p>
              <p>coucou</p>
            </div>
          </div>
          {props.bdd.screenshots.map((element) => {
            <div key={element.url} class="col">
              <img src={element.url} />
            </div>;
          })}
        </div>
        <div>
          <button onClick={() => setCount(count + 1)}>close screenshots</button>
        </div>
      </div>
    );
  }
};

export default CardBody;
