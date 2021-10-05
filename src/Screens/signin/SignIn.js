import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebaseConfig";
import { useHistory } from "react-router-dom";

function SignIn() {
  //Authenticate user details
  const history = useHistory();

  const initialValue = {
    email: "",
    password: "",
  };

  const [user, setUser] = React.useState(initialValue);

  const authUserDetails = async () => {
    if (validateUser()) {
      try {
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          user?.email,
          user?.password
        );

        if (userCredentials.user) {
          console.log(userCredentials.user);
          history.push({
            pathname: "/Home",
            user: userCredentials.user,
          });
        }
        console.log(userCredentials.user);
      } catch (error) {
        console.error("Error while user signin", error);
        toast.error(error.message);
        error?.message.includes("user-not-found") && history.push("/SignUp");
        error?.message.includes("wrong-password") &&
          setUser({ ...user, password: "" });
      }
    }
  };

  const validateUser = () => {
    if (user.email !== "" || user.password !== "") {
      if (
        !(
          user.email.includes("@") &&
          user.email.includes(".com") &&
          user.email.length > 10
        )
      ) {
        toast.error("Enter valid Mail ID.", {
          autoClose: 2000,
        });
        return false;
      } else if (!(user.password.length >= 8 && user.password.length < 30)) {
        user.password.length < 8
          ? toast.error("Password length min : 8 ")
          : toast.error("Password length max : 30 ");
        return false;
      }
    } else {
      toast.error("Please provide email / password");
      return false;
    }
    return true;
  };

  return (
    <SigninContainer>
      <TitleContainer>
        <HeadingDiv>
          <Heading main>SignIn</Heading>
        </HeadingDiv>
        <SignUpHeading>
          <Heading onClick={() => history.push("/SignUp")}>SignUp ◀</Heading>
        </SignUpHeading>
      </TitleContainer>
      <Spliter />
      <LoginContainer>
        <EmailContainer>
          <Label htmlFor="email-input">Email</Label>
          <Input
            borderColor={user.email.color}
            type="email"
            id="email-input"
            value={user.email}
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
          />
        </EmailContainer>
        <PasswordContainer>
          <Label htmlFor="password-input">Password</Label>
          <Input
            borderColor={user.password.color}
            type="password"
            id="password-input"
            value={user.password}
            min={8}
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
          />
        </PasswordContainer>
      </LoginContainer>

      <ButtonContainer>
        <Button type="button" value="Submit" onClick={authUserDetails} />

        <Button cancel type="button" value="Cancel" />
      </ButtonContainer>

      <ButtonContainer>
        <Link to="/SignUp">
          <SignUpNavigate>don't have account, please signup</SignUpNavigate>
        </Link>
      </ButtonContainer>
    </SigninContainer>
  );
}

export default SignIn;

// styleing the components using STYLED-COMPONENT

const SigninContainer = styled.div`
  width: auto;
  height: auto;
  border: 2px solid #66b5ff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: inset 0 0 0 #66b5ff, 0 0 32px #66b5ff;
`;

const Heading = styled.p`
  font-size: ${(props) => (props.main ? "25px" : "12px")};
  font-weight: 800;
  color: #2b5275;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Spliter = styled.hr`
  margin: 10px 0px;
`;
const LoginContainer = styled.div`
  padding: 10px;
`;

const EmailContainer = styled.div`
  display: flex;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
`;

const PasswordContainer = styled.div`
  display: flex;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 5px 0;
`;

const Label = styled.label`
  font-weight: 300;
  font-family: sans-serif;
  margin: 0 10px;
`;

const Input = styled.input`
  box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.1), 0 0 26px rgba(0, 0, 0, 0.1);
  background-color: #d9edff;
  border: ${(props) =>
    props?.borderColor
      ? `1px solid ${props.borderColor}`
      : "1px solid #66b5ff"};
  border-radius: 5px;
  width: auto;
  padding: 5px;
  margin: 0 0 10px 10px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.input`
  padding: 3px 7px;
  border-radius: 10px;
  border: 2px solid whitesmoke;
  background-color: ${(props) => (props.cancel ? "#ff6969" : "#d9edff")};
  font-weight: 700;
  margin: 0 10px;
  &:focus {
    outline-color: #66b5ff;
  }
  cursor: pointer;
`;

const Error = styled.label`
  display: flex;
  font-size: 10px;
  justify-content: center;
  align-items: center;
`;

const SignUpNavigate = styled.p`
  font-size: 10px;
  color: #802a2a;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const SignUpHeading = styled.div`
  cursor: pointer;
`;

const HeadingDiv = styled.div``;
