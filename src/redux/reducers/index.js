import { combineReducers } from "redux";
import cells from "./cells";
import dimensions from "./dimensions";

export default combineReducers({ cells, dimensions });