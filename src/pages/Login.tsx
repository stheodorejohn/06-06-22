import React, { useReducer, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import Todo from "../Redux/Todo/Todo";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../route/Auth";
import Welcome from "./Welcome";

type State = {
  username: string;
  password: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
};

type Action =
  | { type: "setUsername"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setIsButtonDisabled"; payload: boolean }
  | { type: "loginSuccess"; payload: string }
  | { type: "loginFailed"; payload: string }
  | { type: "setIsError"; payload: boolean };

const initialState: State = {
  username: "",
  password: "",
  isButtonDisabled: true,
  helperText: "",
  isError: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setUsername":
      return { ...state, username: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    case "setIsButtonDisabled":
      return { ...state, isButtonDisabled: action.payload };
    case "loginSuccess":
      return { ...state, helperText: action.payload, isError: false };
    case "loginFailed":
      return { ...state, helperText: action.payload, isError: true };
    case "setIsError":
      return { ...state, isError: action.payload };
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  let navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
      dispatch({
        type: "setIsButtonDisabled",
        payload: false,
      });
    } else {
      dispatch({ type: "setIsButtonDisabled", payload: true });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {
    let data = JSON.parse(localStorage.getItem("all_users_db"));
    console.log("data",data);
    const curr_data = data.find(({ username }) => username === state.username);
    console.log("curr_data",curr_data);



    if (data === null) {
      dispatch({
        type: "loginFailed",
        payload: "No Username Registered in Database",
      });
    }else if (!curr_data) {
      dispatch({
        type: "loginFailed",
        payload: "Username is not Registered in Database",
      });
    }
    else if (
      state.username === curr_data.username &&
      state.password === curr_data.password
    ) {
      auth.login(curr_data.username);

      navigate("/welcome");
      <Welcome />;

      dispatch({
        type: "loginSuccess",
        payload: "Login Successfully",
      });
    } else {
      dispatch({
        type: "loginFailed",
        payload: "Password doesnot match Please Try again",
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setUsername",
      payload: event.target.value,
    });
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setPassword",
      payload: event.target.value,
    });
  };

  //   };

  return (
    <form noValidate autoComplete="off">
      <Card
        sx={{
          width: "75vh",
          margin: "auto",
          borderRadius: "25px",
          marginTop: "30px",
          padding: "10px",
          boxShadow: "0px 0px 20px 13px rgba(25,150,210,0.62)",
        }}
      >
        <CardHeader title="Login App" />
        <CardContent>
          <div>
            <TextField
              error={state.isError}
              fullWidth
              id="username"
              type="email"
              label="Username"
              placeholder="Username"
              margin="normal"
              onChange={handleUsernameChange}
              onKeyPress={handleKeyPress}
            />

            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              helperText={state.helperText}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={handleLogin}
            disabled={state.isButtonDisabled}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default Login;
