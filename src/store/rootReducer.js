import { combineReducers } from "redux";
import Operations from "../todoapp/reducers/operations";

const RootReducer = combineReducers({ Operations });

export default RootReducer;
