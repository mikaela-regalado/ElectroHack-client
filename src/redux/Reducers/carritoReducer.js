export default function carritoReducer(
  state = { user: [], items: [], cantIntems: 0, estado: "" },
  action
) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
        cantItems: [...state.items, action.payload].length,
      };
    default:
      return state;
  }
}
