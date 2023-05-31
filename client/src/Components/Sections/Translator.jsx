import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadGif from '../../assets/load.gif';
import styles from '../../Styles/Translator.module.css'
import { idioms } from '../../assets/lang';
import { loaderOn, translateText } from '../../Redux/Actions/Actions';

const Translator = () => {
    const [text, setText] = useState('');
    const [destLang, setDestLang] = useState("");
    const response = useSelector((state) => state.translatorOutPut);
    const loader = useSelector((state) => state.load);
    const dispatch = useDispatch();


    const handleDispatch = (e) => {
        e.preventDefault();
        dispatch(translateText(text, destLang));
        dispatch(loaderOn());
    }

    
    return ( 
        <div className={styles.container}>
        <textarea className={styles.input} placeholder='Insert text' onChange={(e) => setText(e.target.value)}>
        </textarea>
        <div className={styles.settings}>
        <select className={styles.select} value={destLang} onChange={(e) => setDestLang(e.target.value)} >
        <option >Choose a language</option>
      {idioms.map((i) => (
        <option key={i} value={i}>{i}</option>
      ))}
        </select>
        <button className={styles.btn} onClick={handleDispatch}>Translate</button>
        </div>
        <div className={styles.ouput}>
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
 
export default Translator;