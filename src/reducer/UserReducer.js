import { FETCH_USER } from "../Actions/types";

const initialState = {
  userData: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
}
