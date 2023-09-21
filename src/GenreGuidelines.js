import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

//Genre Guidelines
const guidelines = 
<h5>
    Fantasy <br/> 1. Includes magic <br/>2. Is set in an imaginary world<br/> 3. Is based in mythology or folklore. 
    <br/>
    <br/>
    Thriller <br/> 1. Uses suspense <br/> 2. Includes a heist or car chase <br/> 3. Ends with a shocking plot twist.
    <br/>
    <br/>
    Magical Realism <br/> 1. Includes magical elements but within the normal world. The magic should still be commonplace and ordinary within the normal world. 
    <br/>
    <br/>
    Mystery <br/> 1. Asks a question that neither the reader nor the characters know the answer to until the reveal at the end of the story. <br/> 2. Asks a question that characters do know the answer to but the reader does not until the reveal at the end. 
    <br/>
    <br/>
    Sci-Fi <br/> 1. Includes elements that don't exist in the world, but are explained by science within the story. <br/> 2. Includes time travel. <br/> 3. Includes space travel. <br/> 4. Includes elements that are based in real science.
    <br/>
    <br/>
    Dystopian <br/> 1. Takes place in the future and depicts a world or state in despair. <br/> 2. Takes place in the future and includes a fascist government/ruling system. <br/> 3. Takes place in the future and presents the consequences of climate change.
    <br/>
    <br/>
    Historical <br/> 1. Takes place at least twenty years in the past. <br/> 2. Is based in a specific historical event. 
    <br/>
    <br/>
    Romance <br/> 1. Depicts two people falling in love. They do not need to end up in a relationship. 2. Depicts just one person falling in love (unrequited love) 3. Admires beauty of a person or of nature.

</h5>;

//Popup component providing guidelines

export default function PopupGenreGuidelines() {
    return (
        <div>
            <Popup trigger=
                {<button> Click for genre guidelines </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                {guidelines}
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
};

    
