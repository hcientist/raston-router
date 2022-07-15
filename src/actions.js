export const Action = Object.freeze({
  StoreParams: "StoreParams",

  StoreData: "StoreData",

  ShowProgress: "ShowProgress",
  HideProgress: "HideProgress",
});

// fetch parameters
export function storeParams(params) {
  return { type: Action.StoreParams, payload: params };
}

// graph data
export function storeData(data) {
  return { type: Action.StoreData, payload: data };
}

// progress spinner
export function showProgress(progress) {
  return { type: Action.ShowProgress, payload: progress };
}

export function hideProgress(progress) {
  return { type: Action.HideProgress, payload: progress };
}
