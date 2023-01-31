import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useRef, useState } from "react";
import axios from "axios";
import classNames from "classnames";
import {
  checkNameValidation,
  checkPasswordValidation,
  checkEmailValidation,
} from "../../Utils/InputValidation/CheckValidation";

import history from "../../Routes/history";

import "./SignUp.scss";

const cssBase = "signup";
const SignUp = (props) => {
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [lastName, setLastName] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [email, setEmail] = useState("");
  const [isPasswdValid, setIsPasswdValid] = useState(true);
  const [passwd, setPasswd] = useState("");
  const [isPasswdVisible, setIsPasswdVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwdRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      firstNameRef.current.value === "" ||
      lastNameRef.current.value === "" ||
      emailRef.current.value === "" ||
      passwdRef.current.value === "" ||
      selectedProject === ""
    ) {
      console.log("Some fields are empty");
    } else if (
      !isFirstNameValid ||
      !isLastNameValid ||
      !isEmailValid ||
      !isPasswdValid ||
      selectedProject === ""
    ) {
      console.log("Error invalid Entered Data");
    } else {
      axios
        .post("http://localhost:8000/signup", {
          email: email,
          password: passwd,
          firstName: firstName,
          lastName: lastName,
          project: selectedProject,
        })
        .then(() => {
          history.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className={`${cssBase}`}>
      <Container maxWidth="xs" className={`${cssBase}_container`}>
        <div className={`${cssBase}_signUpHeader`}>
          <Avatar className={`${cssBase}_signUpHeaderLogo`}></Avatar>
          <h2>Sign Up</h2>
        </div>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                error={!isFirstNameValid}
                className={`${cssBase}_field`}
                required
                autoFocus
                ref={firstNameRef}
                onBlur={(event) => {
                  if (event.target.value !== "") {
                    if (!checkNameValidation(event.target.value)) {
                      setIsFirstNameValid(false);
                    } else {
                      setFirstName(event.target.value);
                    }
                  }
                }}
                onInput={() => {
                  setIsFirstNameValid(true);
                }}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                className={`${cssBase}_field`}
                error={!isLastNameValid}
                required
                ref={lastNameRef}
                onBlur={(event) => {
                  if (event.target.value !== "") {
                    if (!checkNameValidation(event.target.value)) {
                      setIsLastNameValid(false);
                    } else {
                      setLastName(event.target.value);
                    }
                  }
                }}
                onChange={(event) => {
                  if (event.target.value === "") {
                    setIsLastNameValid(true);
                  }
                }}
                onInput={() => {
                  setIsLastNameValid(true);
                }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="E-mail"
                className={`${cssBase}_field`}
                error={!isEmailValid}
                required
                ref={emailRef}
                onBlur={(event) => {
                  if (event.target.value !== "") {
                    if (!checkEmailValidation(event.target.value)) {
                      setIsEmailValid(false);
                    } else {
                      setEmail(event.target.value);
                    }
                  }
                }}
                onInput={() => {
                  setIsEmailValid(true);
                }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={`${cssBase}_field`}>
                <InputLabel htmlFor="passwd-label">Password *</InputLabel>
                <Input
                  id="passwd-label"
                  className={`${cssBase}_field`}
                  required
                  error={!isPasswdValid}
                  type={isPasswdVisible ? "text" : "password"}
                  ref={passwdRef}
                  autoComplete="On"
                  onBlur={(event) => {
                    if (event.target.value !== "") {
                      if (!checkPasswordValidation(event.target.value)) {
                        setIsPasswdValid(false);
                      } else {
                        setPasswd(event.target.value);
                      }
                    }
                  }}
                  onInput={() => {
                    setIsPasswdValid(true);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          isPasswdVisible
                            ? setIsPasswdVisible(false)
                            : setIsPasswdVisible(true);
                        }}
                      >
                        {isPasswdVisible ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                ></Input>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <InputLabel shrink id="select-label">
                Project
              </InputLabel>
              <Select
                labelId="select-label"
                value={selectedProject}
                onChange={(event) => {
                  setSelectedProject(event.target.value);
                }}
                displayEmpty
                className={classNames(`${cssBase}_field`, `${cssBase}_select`)}
              >
                <MenuItem disabled value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="IBM TRIRIGA">IBM TRIRIGA</MenuItem>
                <MenuItem value="IBM Watson">IBM Watson</MenuItem>
                <MenuItem value="Netcool">Netcool</MenuItem>
              </Select>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              className={`${cssBase}_submitBtn`}
              type="submit"
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={`${cssBase}_submitBtn`}
              onClick={() => {
                history.push("/login");
              }}
            >
              Back
            </Button>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default SignUp;
