function userReducer(state = {}, action) {
  switch (action.type) {
    case "LOGGED":
      return {
        ...state,
        isAdmin: action.payload.isAdmin,
        token: action.payload.token,
        userId: action.payload.userId,
        fullName: action.payload.fullName,
      };
    case "LOG_OUT":
      localStorage.clear();
      return {};
    default:
      return state;
  }
}
export default userReducer;
