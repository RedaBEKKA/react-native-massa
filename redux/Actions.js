// import axios from "axios";

export const setUserInfo = (name, surname) => async (dispatch) => {
  dispatch({
    type: "SET_USER_INFO",
    payload: { name, surname },
  });
};
