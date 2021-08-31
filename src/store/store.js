import { combineReducers, createStore } from "redux";
import { infoReducer } from "../reducers/infoReducer";
import { menuReducer } from "../reducers/menuReducer";

const reducers = combineReducers({
    info: infoReducer,
    menu: menuReducer
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());