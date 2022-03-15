import React from "react";

export const HideOrNotHide = () => {
  // // Code here
  const [count, setCount] = React.useState(0);

  if (count === 0 || count % 2 === 0) {
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>no hide {count}</button>
        <p>My return statement no hide</p>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>hide paragraphe</button>
      </div>
    );
  }
};
