import React from "react";

const CharRow = ({char}) => {
  console.log('the char.urls is: ')
  console.log(char.urls)

  const profile = char.thumbnail.path + '/standard_medium.' + char.thumbnail.extension;

  return (
    <div className="char-row">
      <p>CharName: {char.name}</p>
      <p>Description: {char.description}</p>
      <p>Last Modified on : {char.modified}</p>
      <p>Detail URL: {char.urls[0].url}</p>
      <p>Wiki URL: {char.urls[1].url}</p>
      <img src={profile}></img>
    </div>
  );
};

export default CharRow;