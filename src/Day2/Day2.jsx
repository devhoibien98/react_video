import React, { useState } from "react";

export default function Day2({ title, test, onClick }) {
  //   let count = 0;
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleChange = (e) => {
    console.log(value);
    setValue(e.target.value);
  };
  console.log("Day2", title);

  return (
    <>
      <p>
        Title : {title}
        {test}
      </p>
      <button className="btn btn-success" onClick={handleClick}>
        Click Me {count}
      </button>
      <input
        className="mt-3"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
