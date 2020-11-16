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
    case "REMOVE_ITEM":
      if (state.items.map((item) => item._id === action.payload._id)) {
        return {
          ...state,
          items: state.items.filter((item) => {
            if (item._id === action.payload._id) {
              if (item.cantidad === 1) {
                return console.log("hay 0 hdp");
              }
              return {
                ...item,
                cantidad: --item.cantidad,
              };
            } else {
              return item;
            }
          }),
        };
      } else {
      }
    case "EMPTY_CART":
      return { items: [], status: "No Pago" };
    default:
      return state;
  }
}
