import React, { useState } from "react";
import { genreArray, settingArray, wordsArray } from './Arrays';

export default function Button() {
  //Random Index
  const randomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };

  //states

  const [buttonText, setButtonText] = useState("Generate a writing prompt!");

  const randomGenre = genreArray[randomIndex(genreArray)];

  const [genre, setGenre] = useState();

  const randomSetting = settingArray[randomIndex(settingArray)];

  const [setting, setSetting] = useState();

 
  //shuffle array to select random words
  let shuffledWords = wordsArray.sort(() => 0.5 - Math.random());

  const [firstWord, setFirstWord] = useState();
  const [secondWord, setSecondWord] = useState();
  const [thirdWord, setThirdWord] = useState();

  //Render
  return (
    <div className="generatorButton">
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
    <div className="generatorContent">
      <div className="genre">
    <h4> <u>GENRE</u> <br/>  {genre}</h4>
    </div>
    <div className="setting">
    <h4><u>SETTING</u><br/> {setting}</h4>
    </div>
    <div className="words">
    <h4> <u>WORDS</u> <br/>  1.{firstWord} <br /> 2.{secondWord} <br /> 3.{thirdWord}
    </h4>
    </div>
    </div>
      </div>
  );
}
