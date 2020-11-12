const actionLogin = (data) => {
  return {
    type: "LOGGED",
    payload: {
      token: data.token,
      userId: data.userId,
      fullName: data.fullName,
    },
  };
};

export default actionLogin;
