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

const actions = { addItem, removeItem }; //, countItems };
export default actions;
