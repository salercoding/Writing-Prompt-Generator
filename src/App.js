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
       
        <h3> Click the button below to generate a random genre, setting, and three words.</h3>
        <div className="generator">
    <Button/>
    </div>
    <div className="instructions">
      <h5>
        The rules: <br/> 
        1.  Your story must fulfill at least one of the elements of the given genre, as detailed in the genre guidelines. <br/>
        <PopupGenreGuidelines />
        2.  Your story must include the given setting, but you can choose to include a second setting if you wish. <br/>
        3.  You must include each of the given words at least once in your story. They can appear in any order. <br/>
        4.  Be creative and have fun!
        </h5>
        </div>
    
    </div>
  );
}

export default App;
