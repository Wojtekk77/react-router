import { combineReducers } from "redux";

import { articleReducer } from "./articleReducers";
import { numerologyReducer } from "./numerologyReducers";

export const rootReducer = combineReducers({
    article: articleReducer,
    numerology: numerologyReducer,
});
