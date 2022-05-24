import axios from "axios";
import { TOKEN, ENPOINT_USER_INFO } from "@env";
export const setUserInfo = () => async (dispatch) => {
  const response = await axios.post(ENPOINT_USER_INFO, { access_token: TOKEN });
  console.log(TOKEN, " token");
  const userInfo = response.data;
  dispatch({
    type: "SET_USER_INFO",
    payload: userInfo,
  });
};
