import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Action } from "./actions";

const initialState = {
  params: {
    species: [{ molecule: "CO", mole_fraction: 1 }],
    min_wavenumber_range: 1900,
    max_wavenumber_range: 2300,
    tgas: 294.15,
    tvib: null,
    trot: null,
    pressure: 0.0001,
    path_length: 10,
    simulate_slit: false,
    mode: "transmittance_noslit",
    database: "hitran",
  },

  data: null,

  isProgressing: false,
};

function reducer(state, action) {
  switch (action.type) {
    // fetch parameters
    case Action.StoreParams:
      return {
        ...state,
        params: action.payload,
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

      
    case Action.StoreData:
      return {
        ...state,
        data: action.payload,
      };


    default:
      return state;
  }
}

export default createStore(reducer, initialState, applyMiddleware(thunk));
