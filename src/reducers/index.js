import { combineReducers } from "redux";
import AccessoriesReducer from "./reducer_accessories";
import ActiveAccessoriesReducer from "./reducer_active_accessories";
import PopulateItemsGrid from './reducer_populate_grid';

const rootReducer = combineReducers({
  accessories: AccessoriesReducer,
  activeAccessories: ActiveAccessoriesReducer,
  items: PopulateItemsGrid
});

export default rootReducer;