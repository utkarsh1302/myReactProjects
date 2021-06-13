import { userActions } from "../Actions/ActionTypes";

const INITIAL_STATE = {
  email: "",
  token: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActions.SET_USER_DETAILS:
      return {
        ...state,
        email: action.data.email,
        token: action.data.token.accessToken,
      };
    default:
      return state;
  }
};

export default userReducer;
