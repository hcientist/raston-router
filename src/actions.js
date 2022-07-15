export const Action = Object.freeze({
  StoreParams: "StoreParams",
  StoreData: "StoreData",
});

// fetch parameters
export function storeParams(params) {
  return { type: Action.StoreParams, payload: params };
}

// graph data
export function storeData(data) {
  return { type: Action.StoreData, payload: data };
}
