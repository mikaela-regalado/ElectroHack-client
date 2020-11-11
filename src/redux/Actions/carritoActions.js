const addItem = (slug) => {
  return {
    type: "ADD_ITEM",
    payload: slug,
  };
};

const actions = { addItem };
export default actions;
