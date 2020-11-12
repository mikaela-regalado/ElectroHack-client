export default function carritoReducer(
  state = { items: [], status: "No Pago" },
  action
) {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.items.some((item) => item._id === action.payload._id)) {
        return {
          ...state,
          items: state.items.map((item) => {
            if (item._id === action.payload._id) {
              return {
                ...item,
                cantidad: ++item.cantidad,
              };
            } else {
              return item;
            }
          }),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, cantidad: 1 }],
        };
      }

    default:
      return state;
  }
}
