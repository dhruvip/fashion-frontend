import { combineReducers } from "redux";
import AccessoriesReducer from "./reducer_accessories";
import ActiveAccessoriesReducer from "./reducer_active_accessories";

const rootReducer = combineReducers({
  accessories: AccessoriesReducer,
  activeAccessories: ActiveAccessoriesReducer
});

export default rootReducer;