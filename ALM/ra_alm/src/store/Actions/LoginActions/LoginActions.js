import { userActions } from "../ActionTypes";
import axios from "axios";
import history from "../../../Routes/history";

const setUserDetails = (email, loginToken, isLoggedIn) => {
  return {
    type: userActions.SET_USER_DETAILS,
    data: { email: email, token: loginToken, isLoggedIn },
  };
};

function loginAction(email, passwd) {
  return (dispatch) => {
    axios
      .post("http://localhost:8000/login", {
        email: email,
        password: passwd,
      })
      .then((response) => {
        dispatch(LoginActions.setUserDetails(email, response.data, true));
        history.push("/dashboard");
      })
      .catch((error) => console.log(error));
  };
}

export const LoginActions = {
  setUserDetails,
  loginAction,
};
