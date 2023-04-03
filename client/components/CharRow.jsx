import React from "react";

const CharRow = ({char}) => {
  console.log('the char is: ')
  console.log(char)
  return (
    <div className="char-row">
      <p>CharName: {char.name}</p>
      <p>Description: {char.description}</p>
      <p>comics.collectionURI: {char.comics.collectionURI}</p>
    </div>
  );
};

export default CharRow;