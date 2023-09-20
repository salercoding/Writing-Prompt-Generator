import React, { useState } from "react";
import { genreArray, settingArray, wordsArray, duplicates } from './Arrays';

export default function Button() {
  //Random Index
  const randomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };

  //states

  const [buttonText, setButtonText] = useState("Generate a writing prompt!");

  const randomGenre = genreArray[randomIndex(genreArray)];

  const [genre, setGenre] = useState("Random Genre");

  const randomSetting = settingArray[randomIndex(settingArray)];

  const [setting, setSetting] = useState("Random Setting");

 
  //shuffle array to select random words
  let shuffledWords = wordsArray.sort(() => 0.5 - Math.random());

  const [firstWord, setFirstWord] = useState("Random Word");
  const [secondWord, setSecondWord] = useState("Random Word");
  const [thirdWord, setThirdWord] = useState("Random Word");

  //Render
  return (
    <div>
      <h3
        onClick={() => {
          setButtonText("Try another prompt!")
          setGenre(randomGenre);
          setSetting(randomSetting);
          setFirstWord(shuffledWords[0]);
          setSecondWord(shuffledWords[1]);
          setThirdWord(shuffledWords[2]);
        }}
      >
        {buttonText}
      </h3>
      <h4>Genre: {genre}</h4>
      <h4>Setting: {setting}</h4>
      <h4>
        Words: <br /> 1.{firstWord} <br /> 2.{secondWord} <br /> 3.{thirdWord}
      </h4>
    </div>
  );
}
