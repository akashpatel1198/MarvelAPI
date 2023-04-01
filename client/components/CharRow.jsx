import React from "react";

const CharRow = (props) => {
  return (
    <div className="char-row">
      <p>CharName: {props.name}</p>
      <p>Description: {props.desc}</p>
    </div>
  );
};

export default CharRow;