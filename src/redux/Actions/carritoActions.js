const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

const actions = { addItem }; //, countItems };
export default actions;
