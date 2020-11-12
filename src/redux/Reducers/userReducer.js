function userReducer(state = {}, action) {
  switch (action.type) {
    case "LOGGED":
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        fullName: action.payload.fullName,
      };
    default:
      return state;
  }
}
export default userReducer;
