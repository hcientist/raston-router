import { createStore } from "redux";
import { Action } from "./actions";

const initialState = {
  storeInput: null,
};

function reducer(state, action) {
  switch (action.type) {
    case Action.StoreInput:
      return {
        ...state,
        storeInput: action.payload,
      };
    default:
      return state;
  }
}

export default createStore(reducer, initialState);
