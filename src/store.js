import { createStore, combineReducers } from "redux";
import { waterStateReducer } from './reducers'

const rootReducer = combineReducers({
    waterStateReducer: waterStateReducer
});

export const store = createStore(rootReducer);
