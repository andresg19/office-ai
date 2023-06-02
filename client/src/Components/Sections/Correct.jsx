import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styles from '../../Styles/Correct.module.css'
import { correctText, loaderOn } from '../../Redux/Actions/Actions';
import loadGif from '../../assets/load.gif';

const Correct = () => {
    const [text, setText] = useState('');
    const response = useSelector((state) => state.correctOutput);
    const loader = useSelector((state) => state.load);
    const dispatch = useDispatch();

    const handleDispatch = (e) => {
        e.preventDefault();
        dispatch(correctText(text));
        dispatch(loaderOn());
    }

    return ( 
    <div className={styles.container}>
        <textarea className={styles.input} placeholder='Insert text' onChange={(e) => setText(e.target.value)}>
        </textarea>
        <button className={styles.btn} onClick={handleDispatch}>Correct</button>
        <div className={styles.output}>
            {
                loader === true?
                ( <img src={loadGif} alt="load not found" /> ) :
                response.length ?
                ( <p>{response}</p> ) :
                null
            }
        </div>
    </div> 
    );
}
 
export default Correct;