import { combineReducers } from "redux";
import AccessoriesReducer from "./reducer_accessories";

const rootReducer = combineReducers({
  accessories: AccessoriesReducer
});

export default rootReducer;