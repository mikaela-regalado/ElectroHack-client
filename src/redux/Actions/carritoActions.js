const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};
const removeItem = (item) => {
  return {
    type: "REMOVE_ITEM",
    payload: item,
  };
};
const emptyCart = () => {
  return {
    type: "EMPTY_CART",
  };
};

const actions = { addItem, removeItem, emptyCart }; //, countItems };
export default actions;
