import { createStore, combineReducers } from "redux";
import readAndTranslateReducer from "./read-reducer";

let reducers = combineReducers({
    readAndTranslatePage: readAndTranslateReducer
    
})

let store = createStore(reducers);

window.store = store;

export default store;
