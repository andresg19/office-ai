import React from 'react';

const Buttons = ({setSections}) => {
    return ( 
        <div>
            <button onClick={() => setSections('Main')}>Main</button>
            <button onClick={() => setSections('Correct')}>Correct Text</button>
            <button onClick={() => setSections('Translator')}>Translate Text</button>
            <button onClick={() => setSections('Chat')}>Chat</button>
        </div>
     );
}
 
export default Buttons;