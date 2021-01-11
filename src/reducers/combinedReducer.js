import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { eventReducer } from "./eventReducer";
import { stockReducer } from "./stockReducer"


export const rootReducer = combineReducers({
  auth: authReducer,
  events: eventReducer,
  stock: stockReducer,
});
