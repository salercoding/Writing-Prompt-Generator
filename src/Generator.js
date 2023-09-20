import React, { useState } from "react";

export default function Button() {
  //Random Index
  const randomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };
  //Genre
  const genreArray = [
    "Comedy",
    "Drama",
    "Thriller",
    "Action",
    "Mystery",
    "Dramedy",
    "Fantasy",
    "Sci-Fi",
    "Dystopian",
    "Utopian",
    "Historical",
  ];
  const randomGenre = genreArray[randomIndex(genreArray)];

  const [genre, setGenre] = useState("Random Genre");

  //Setting
  const settingArray = [
    "Abandoned Mine",
    "Airplane",
    "Airport Check-in",
    "Alley",
    "Amusement Park",
    "Attic",
    "Bakery",
    "Bank",
    "Basement",
    "Barn",
    "Beach",
    "Birthday Party",
    "Bonfire",
    "Bowling Alley",
    "Bridge",
    "Bookstore",
    "Cafeteria",
    "Casino",
    "Catacombs",
    "Cave",
    "City Park",
    "Classroom",
    "Closet",
    "Coffee House",
    "Courtroom",
    "Cruise Ship",
    "Cryogenic Sleep Chamber",
    "Daycare",
    "Desert",
    "Diner",
    "Dragon's Lair",
    "Elevator",
    "Farm",
    "Forest",
    "Frozen Tundra",
    "Garage",
    "Garden",
    "Graveyard",
    "Grocery Store",
    "Halloween Party",
    "Haunted House",
    "Herbalist Shop",
    "Hospital",
    "Hotel Room",
    "Kitchen",
    "Laboratory",
    "Lake",
    "Library",
    "Locker Room",
    "Medieval Castle",
    "Medieval Marketplace",
    "Middle School Dance",
    "Mountains",
    "Movie Theatre",
    "Night Club",
    "Old Pick-Up Truck",
    "Pirate Ship",
    "Prison Cell",
    "Public Pool",
    "School Bus",
    "Shopping Mall",
    "Sleep-Away Camp",
    "Spaceship",
    "Subway Station",
    "Swamp",
    "Taxi cab",
    "Treehouse",
    "Busy Street",
    "Arcade",
    "Waiting Room",
    "Theme Park",
    "Wedding Ceremony",
    "Zoo",
  ];
  const randomSetting = settingArray[randomIndex(settingArray)];

  const [setting, setSetting] = useState("Random Setting");

  //Three Words
  const wordsArray = [
    "Cake",
    "Original",
    "Button",
    "Favor",
    "Salmon",
    "Earthwax",
    "Compensation",
    "Palm",
    "Bother",
    "Wolf",
    "Prescription",
    "Reader",
    "Round",
    "Bad",
    "Consolidate",
    "Negotiation",
    "Banner",
    "Musical",
    "Manufacturer",
    "Crystal",
    "Thick",
    "Record",
    "Quest",
    "Talk",
    "Attraction",
    "Dip",
    "Wind",
    "Demonstrate",
    "Studio",
    "Hospitality",
    "Environment",
    "Prisoner",
    "Perfect",
    "Move",
    "Privacy",
    "Prosecute",
    "Provision",
    "Mouse",
    "Quality",
    "Flash",
    "Research",
    "Horror",
    "Dark",
    "Aquarium",
    "Pride",
    "Random",
    "Mercy",
    "Photocopy",
    "Consultation",
    "Benefit",
  ];

  //shuffle array to select random words
  let shuffledWords = wordsArray.sort(() => 0.5 - Math.random());

  //set words
  const [firstWord, setFirstWord] = useState("Random Word");
  const [secondWord, setSecondWord] = useState("Random Word");
  const [thirdWord, setThirdWord] = useState("Random Word");

  //Render
  return (
    <div>
      <h3
        onClick={() => {
          setGenre(randomGenre);
          setSetting(randomSetting);
          setFirstWord(shuffledWords[0]);
          setSecondWord(shuffledWords[1]);
          setThirdWord(shuffledWords[2]);
        }}
      >
        {" "}
        Click here!{" "}
      </h3>
      <h4>Genre: {genre}</h4>
      <h4>Setting: {setting}</h4>
      <h4>
        Words: <br /> 1.{firstWord} <br /> 2.{secondWord} <br /> 3.{thirdWord}
      </h4>
    </div>
  );
}
