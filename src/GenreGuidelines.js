import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

//Genre Guidelines
const guidelines = <p>
<u>Fantasy</u> <br/> 1. Includes magic <br/>2. Is set in an imaginary world<br/> 3. Is based in mythology or folklore. 
<br/>

<u>Thriller</u> <br/> 1. Uses suspense <br/> 2. Includes a heist or car chase <br/> 3. Ends with a shocking plot twist.
<br/>

<u>Magical Realism</u> <br/> 1. Includes magical elements but within the normal world. The magic should still be commonplace and ordinary within the normal world. 
<br/>

<u>Mystery</u> <br/> 1. Asks a question that neither the reader nor the characters know the answer to until the reveal at the end of the story. <br/> 2. Asks a question that characters do know the answer to but the reader does not until the reveal at the end. 
<br/>

<u>Sci-Fi</u><br/> 1. Includes elements that don't exist in the world, but are explained by science within the story. <br/> 2. Includes time travel. <br/> 3. Includes space travel. <br/> 4. Includes elements that are based in real science.
<br/>

<u>Dystopian</u> <br/> 1. Takes place in the future and depicts a world or state in despair. <br/> 2. Takes place in the future and includes a fascist government/ruling system. <br/> 3. Takes place in the future and presents the consequences of climate change.
<br/>

<u>historical</u> <br/> 1. Takes place at least twenty years in the past. <br/> 2. Is based in a specific historical event. 
<br/>

<u>Romance</u><br/> 1. Depicts two people falling in love. <br/> They do not need to end up in a relationship. <br/> 2. Depicts just one person falling in love (unrequited love) <br/> 3. Admires beauty of a person or of nature.

</p>;


//Popup component providing guidelines

export default function PopupGenreGuidelines() {
    return (
        <div>
            <Popup trigger=
                {<button> Click Here For Genre Guidelines </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='modalContent'>
                                {guidelines}
                            </div>
                            <div className="modalCloseButton">
                                <button onClick=
                                    {() => close()}>
                                        X
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
};

    
