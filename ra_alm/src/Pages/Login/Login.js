import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";

import { connect } from "react-redux";
import "./Login.scss";
import { LoginActions } from "../../store/Actions/LoginActions/LoginActions";
import history from "../../Routes/history";

import {
  checkPasswordValidation,
  checkEmailValidation,
} from "../../Utils/InputValidation/CheckValidation";

const cssBase = "login";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswdValid, setIsPasswdValid] = useState(true);

  const authenticateUser = (event) => {
    event.preventDefault();
    if (email.trim() === "" || !checkEmailValidation(email)) {
      setIsEmailValid(false);
      return;
    } else if (passwd.trim() === "" || !checkPasswordValidation(passwd)) {
      setIsPasswdValid(false);
      return;
    } else {
      props.handleAuthentication(email, passwd);
    }
  };
  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      authenticateUser(event);
    }
  };

  return (
    <Grid container className={`${cssBase}`}>
      <Grid container item xs={12} sm={6} spacing={0}>
        <h1 className={`${cssBase}_text`}>MANAGING PROJECT WITH EASE</h1>
      </Grid>
      <Grid container item xs={12} sm={6} spacing={0}>
        <div className={`${cssBase}_loginContainer`}>
          <h2 className={`${cssBase}_loginHeading`}>Welcome</h2>
          <form onSubmit={authenticateUser} className={`${cssBase}_loginForm`}>
            <TextField
              autoFocus
              error={!isEmailValid}
              className={`${cssBase}_emailField`}
              label="E-mail"
              onInput={(event) => {
                setEmail(event.target.value);
                setIsEmailValid(true);
              }}
              onBlur={(event) => {
                if (event.target.value !== "") {
                  if (!checkEmailValidation(event.target.value)) {
                    setIsEmailValid(false);
                  }
                }
              }}
              helperText={isEmailValid ? null : "Enter valid E-mail"}
              onKeyDown={handleEnter}
            />
            <TextField
              error={!isPasswdValid}
              className={`${cssBase}_passwdField`}
              label="Password"
              type="password"
              autoComplete="On"
              onInput={(event) => {
                setPasswd(event.target.value);
                setIsPasswdValid(true);
              }}
              onBlur={(event) => {
                if (event.target.value !== "") {
                  if (!checkPasswordValidation(event.target.value)) {
                    setIsPasswdValid(false);
                  }
                }
              }}
              helperText={isPasswdValid ? null : "Enter valid password"}
            />
            <Button
              variant="contained"
              color="primary"
              className={`${cssBase}_loginBtn`}
              type="submit"
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={`${cssBase}_signUpBtn`}
              onClick={() => history.push("/signup")}
            >
              SignUp
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    email: "",
    token: "",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAuthentication: async (email, passwd) => {
      await dispatch(LoginActions.loginAction(email, passwd));
      history.push("/dashboard");
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
