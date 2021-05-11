import { combineReducers } from "redux";
import randomReducer from "./auth/reducer";

const appReducer = combineReducers({
  randomReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
