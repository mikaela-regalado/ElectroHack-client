export default function carritoReducer(
  state = { user: [], items: [], estado: "" },
  action
) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}
