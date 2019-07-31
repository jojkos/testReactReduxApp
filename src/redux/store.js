import { createStore, compose } from 'redux';
import rootReducer from "./reducers";
import DevTools from "../containers/DevTools";

export default createStore(
    rootReducer,
    undefined, // initial state is handled in the reducers
    compose(
        // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, // enables chrome redux extension
        DevTools.instrument() // enables history directly inside app
        // those two cannot be combine together
    ) 
);