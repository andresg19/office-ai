import { LOADER, CORRECT_TEXT, TRANSLATE, CHAT } from "../Actions/ActionTypes";

const initialState = {
    correctOutput: [],
    translatorOutPut: [],
    chat: [],
    load: false,
};

export default function rootReducer(state = initialState, {type, payload}) {
    switch (type) {
        case CORRECT_TEXT:
            return {
                ...state,
                correctOutput: payload,
                load: false,
            }
        case TRANSLATE:
            return {
                ...state,
                translatorOutPut: payload,
                load:false,
            }
        case CHAT:
            return {
                ...state,
                chat: payload,
                load: false,
            }
            case LOADER:
                return {
                ...state,
                load: true,
                }
        default:
            return state;
    };
};