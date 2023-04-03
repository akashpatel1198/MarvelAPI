import React, {useEffect, useState} from "react";
import CharRow from "./CharRow";

const API_KEY = '46f3dd44ff8f987515c6703c1bdfb25b';
// const fetchURI = 'https://gateway.marvel.com:443/v1/public/characters\
// ?nameStartsWith=spider&orderBy=name&limit=10&apikey=' + API_KEY;

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <label>Character Name: </label>
      <input id="name"></input>
      <label>Limit: </label>
      <input id="limit"></input>
      <button className="search-btn" onClick={props.handleClick}>Search</button>
    </div>
  );
};


const CharSearch = () => {

  const [charArr, setCharArr] = useState([]);

  function handleClick() {
    const name = document.getElementById('name');
    const limit = document.getElementById('limit');
    callAPI(name.value, limit.value ? limit.value : 10);
    name.value = '';
    limit.value = '';
  };

  function callAPI(charName, limit = 10) {
    let URI = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=';
    URI += charName;
    URI += '&orderBy=name&limit=' + limit;
    URI += '&apikey='+ API_KEY;

    fetch(URI)
      .then((res) => res.json())
      .then((data) => {
        setCharArr([]);
        // console.log(data.data.results)
        for (let char of data.data.results) {
          setCharArr((prevState) => {
            const newState = [...prevState];
            newState.push(<CharRow char={char}></CharRow>);
            return newState;
          })
          // charArr.push(<CharRow name={char.name} desc={char.description}></CharRow>)
        }
      })
      .catch(err => {
        console.log('there was an err in the fetch req')
        console.log(err)
      })
  }

  return (
    <div id="char-search">
      <p>This is the API_KEY: {API_KEY}</p>
      <SearchBar handleClick={handleClick}></SearchBar>
      {charArr}
    </div>
  );
};

export default CharSearch;