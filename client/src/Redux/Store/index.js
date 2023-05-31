import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer";

const composeEnhacers = window._REDUX_DEVTOOLS_EXTENSIONS_COMPOOSE || compose;

const store = createStore(
    rootReducer,
    composeEnhacers(applyMiddleware(thunk))
);

export default store;