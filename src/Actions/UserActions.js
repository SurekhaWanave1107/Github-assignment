import { FETCH_USER } from "./types";
import axios from "axios";

export const fetchUser = (userName) => (dispatch) => {
  axios.get(`https://api.github.com/users/${userName}`).then((res) =>
    dispatch({
      type: FETCH_USER,
      payload: res.data,
    })
  );
};
