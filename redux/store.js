import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const reducer = combineReducers({
  userInfo: userReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
