import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Action } from "./actions";

const initialState = {
  params: null,

  data: null,

  isProgressing: false,
};

function reducer(state, action) {
  switch (action.type) {
    // fetch parameters
    case Action.StoreParams:
      return {
        ...state,
        storeParams: action.payload,
      };

    // Show spinning progress wheel
    case Action.ShowProgress:
      return {
        ...state,
        isProgressing: true,
      };
    // Hide spinning progress wheel
    case Action.HideProgress:
      return {
        ...state,
        isProgressing: false,
      };

    default:
      return state;
  }
}

export default createStore(reducer, initialState, applyMiddleware(thunk));
