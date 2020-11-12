export default function carritoReducer(
  state = { items: [], status: "No Pago" },
  action
) {
  switch (action.type) {
    case "ADD_ITEM":
      console.log(state.items);
      console.log(action.payload._id);

      if (state.items.some((item) => item._id === action.payload._id)) {
        console.log("Existe");
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
        console.log("No existe");
        return {
          ...state,
          items: [...state.items, { ...action.payload, cantidad: 1 }],
        };
      }

    default:
      return state;
  }
}
