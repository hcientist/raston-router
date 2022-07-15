import { createStore } from "redux";
import { Action } from "./actions";

const initialState = {
  params: null,
  data: null,
};

function reducer(state, action) {
  switch (action.type) {
    case Action.StoreParams:
      return {
        ...state,
        storeParams: action.payload,
      };
    case Action.StoreData:
      return {
        storeData: action.payload,
      };
    default:
      return state;
  }
}

export default createStore(reducer, initialState);
