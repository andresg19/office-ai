import React from 'react';
import styles from '../../Styles/Buttons.module.css';


const Buttons = ({setSections}) => {
    return ( 
        <div className={styles.container}>
            <button className={styles.btn} onClick={() => setSections('Main')}>Main</button>
            <button className={styles.btn} onClick={() => setSections('Correct')}>Correct Text</button>
            <button className={styles.btn} onClick={() => setSections('Translator')}>Translate Text</button>
            <button className={styles.btn} onClick={() => setSections('Chat')}>Chat</button>
        </div>
     );
}
 
export default Buttons;