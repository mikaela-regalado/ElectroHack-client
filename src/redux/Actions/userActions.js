export const actionCreators = {
  login: (data) => {
    return {
      type: "LOGGED",
      payload: {
        token: data.token,
        userId: data.userId,
        fullName: data.fullName,
      },
    };
  },
  logOut: () => {
    return {
      type: "LOG_OUT",
      // payload: data,
    };
  },
};
