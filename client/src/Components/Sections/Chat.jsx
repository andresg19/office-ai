import React, { useEffect, useState } from 'react';
import styles from '../../Styles/Chat.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { chat, clearStates, loaderOn } from '../../Redux/Actions/Actions';
import loadGif from '../../assets/load.gif'

const Chat = () => {
    const [text, setText] = useState('');
    const response = useSelector((state) => state.chat);
    const loader = useSelector((state) => state.load);
    const dispatch = useDispatch();



    const handleDispatch = (e) => {
        e.preventDefault();
            dispatch(chat(text));
            dispatch(loaderOn());
    };
    const handleReload = (e) => {
        e.preventDefault();
            dispatch(clearStates());
    };

    return ( 
        <div className={styles.container}>
            <div className={styles.ouput}>
        <p>
            {
                loader === true?
                ( <img src={loadGif} alt="load not found" /> ) :
                response.length ?
                ( <p>{response}</p>
                ) :
                null
            }
        </p>
        
            </div>
        <div className={styles.send}>
        <input className={styles.input} placeholder='Insert text' onChange={(e) => setText(e.target.value)} />
                <button className={styles.btn} onClick={handleDispatch}>send</button>

        </div>
    </div>  
    );
};
 
export default Chat;