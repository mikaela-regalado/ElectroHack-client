const addItem = (itemId) => {
  return {
    type: "ADD_ITEM",
    payload: itemId,
  };
};

const actions = { addItem }; //, countItems };
export default actions;
