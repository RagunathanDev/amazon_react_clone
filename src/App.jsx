import Header from "./header/Header";
import SignUp from "./Screens/signup/SignUp";

import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SignIn from "./Screens/signin/SignIn";
//react router's
import { Switch, Link, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import TimeOut from "./Screens/SessionTimeOut/TimeOut";

function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/SignIn">
          <SignIn />
        </Route>
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Home" component={TimeOut} />
        <Route exact path="/">
          <SignIn />
        </Route>
      </Switch>

      <StyledToastContainer theme="dark" />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c0d9f0;
`;

// const ToastContainer = styled(ToastContainer).attrs({
//   heig,
// });
const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  /* .toast-container */
  width: auto;
  height: auto;
  overflow: hidden;
  /* .toast is passed to toastClassName */
  .toast {
    background-color: var(--color-black);
    color: black;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: small;
  }

  button[aria-label="close"] {
    display: none;
  }

  /* .body is passed to bodyClassName */
  .body {
  }

  /* .progress is passed to progressClassName */
  .progress {
  }
`;
