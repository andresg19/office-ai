import axios from "axios";
import { CORRECT_TEXT, TRANSLATE ,LOADER, CHAT, CLEAR } from "./ActionTypes";


export const correctText = ( text ) => {
    return async function (dispatch) {
        try {
            let result = await axios.get(`https://office-ai-server.vercel.app/correct?text=${text}`);
            return dispatch({
                type: CORRECT_TEXT,
                payload: result.data
            });
        } catch (error) {
            return dispatch({
                type: CORRECT_TEXT,
                payload: "I'm sorry, I can't assist you regarding the provided text."
            });
        }
    };
};


export const translateText = ( text, destLang ) => {
    return async function (dispatch) {
        try {
            let result = await axios.get(`https://office-ai-server.vercel.app/translate?text=${text}&destLang=${destLang}`);
            return dispatch({
                type: TRANSLATE,
                payload: result.data
            });
        } catch (error) {
             return dispatch({
                type: TRANSLATE,
                payload: "I'm sorry, I can't assist you regarding the provided text."
            });
        }
    };
};

export const chat = ( text ) => {
    return async function (dispatch) {
        try {
            let result = await axios.get(`https://office-ai-server.vercel.app/chat?text=${text}`);
            return dispatch({
                type: CHAT,
                payload: result.data
            });
            
        } catch (error) {
            return dispatch({
                type: CORRECT_TEXT,
                payload: "I'm sorry, I can't assist you regarding the provided text."
            });
        }
    };
}

export const loaderOn = () => {
    return async function(dispatch) {
        try {
            return dispatch({
                type: LOADER,
            })
        } catch (error) {
            console.log(error)
        }
    };
};

export const clearStates = () => {
    return async function(dispatch) {
        try {
            return dispatch({
                type: CLEAR,
            })
        } catch (error) {
            console.log(error)
        }
    };
};