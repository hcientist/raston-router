export const Action = Object.freeze({
  StoreInput: "StoreInput",
});

export function storeInput(params) {
  return { type: Action.StoreInput, payload: params };
}
