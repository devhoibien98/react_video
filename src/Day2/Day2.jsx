import React from "react";

export default function Day2() {
  const handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    <div>
      <button className="btn btn-success mt-3" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}
