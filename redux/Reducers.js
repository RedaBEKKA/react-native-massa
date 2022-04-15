export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return action.payload;
    default:
      return state;
  }
};
