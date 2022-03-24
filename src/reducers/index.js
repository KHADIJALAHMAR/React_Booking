import authReducer from "./authReducer";
import roleReducer from "./roleReducer";
import userIdReducer from "./userIdReducer";
import citiesReducer from "./citiesReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cities: citiesReducer,
  authenticated: authReducer,
  role: roleReducer,
  id: userIdReducer,
});

export default allReducers;
