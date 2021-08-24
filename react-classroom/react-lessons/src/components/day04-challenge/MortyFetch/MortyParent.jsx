// import and mount this component in the app.jsx file *

//you need to create a button click that will conduct the fetch of ... https://rickandmortyapi.com/api/character

//API docs: https://rickandmortyapi.com/documentation

// console.log the characters
//see if you can store the characters into a useState variable
import React, { useState, useEffect } from "react";
import MortyChild from "../MortyFetch/MortyChild";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";

const MortyParent = (props) => {
  const [results, setResults] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  const fetchURL = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    setResults(data.results);
  };

  const handleClick = () => {
    fetchURL();
  };

  const displayCards = () =>
    results.map((character) => <MortyChild character={character} />);
  return (
    <div>
      <p>Hello from Morty</p>
      <button onClick={handleClick}>Click for Character</button>
      <CardColumns>{displayCards()}</CardColumns>
    </div>
  );
};

export default MortyParent;