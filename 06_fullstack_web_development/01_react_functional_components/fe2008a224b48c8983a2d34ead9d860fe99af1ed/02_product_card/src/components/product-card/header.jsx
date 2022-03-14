import React from "react";

const CardHeader = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      {/* const logo = {props.platforms[0].platform_logo.url} */}
      {/* <h1>{props.platforms[0].platform_logo.url}</h1> */}
      {/* <img src="images.igdb.com/igdb/image/upload/t_logo_med/pl6b.png" alt="" /> */}
    </div>
  );
};

export default CardHeader;
{
  /* <img src="{props.platforms.platform_logo.url}" /> */
}
