export const userReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return action.payload;
    default:
      return state;
  }
};


