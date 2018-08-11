import { combineReducers } from "redux";
import AccessoriesReducer from "./reducer_accessories";
import ActiveAccessoriesReducer from "./reducer_active_accessories";
import PopulateItemsGrid from './reducer_populate_grid';
import saveStatus from './reducer_saveItem';
import authReducers from './reducer_auth';

const rootReducer = combineReducers({
  accessories: AccessoriesReducer,
  activeAccessories: ActiveAccessoriesReducer,
  items: AccessoriesReducer,
  saveStatus: saveStatus,
});
export default rootReducer;