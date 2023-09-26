import Button from "./Generator";
import PopupGenreGuidelines from "./GenreGuidelines";
import "./App.css";

const logo = require("./images/icon.png");

function App() {
  return (
    <div className="App">
    <header className="header">
      <img src={logo}/>
      <h1>Writing Prompt Generator</h1>
      <h2>A creative challenge to battle writer's block</h2>
    </header>
       
        
        <div className="generator">
    <Button/>
    </div>
    <div className="instructions">
      <p>
      <u>Directions</u> <br/> 
        Write a short story using the writing prompt generator for inspiration. Try to stick to the following rules: <br/>
        1.  Your story must fulfill at least one of the elements of the given genre, as detailed in the genre guidelines. <br/>
        <PopupGenreGuidelines />
        2.  Your story must include the given setting, but you can choose to include a second setting if you wish. <br/>
        3.  You must include each of the given words at least once in your story. They can appear in any order. <br/>
        4.  Be creative and have fun!
        </p>
        </div>
    
    </div>
  );
}

export default App;
