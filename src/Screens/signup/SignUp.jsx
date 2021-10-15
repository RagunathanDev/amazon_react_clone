import React from "react";
import styled from "styled-components";
import {
  collection,
  addDoc,
  getDoc,
  setDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { userRef } from "../../firebase/firebaseCollectionRef";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const history = useHistory();

  const initialValue = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [user, setUser] = React.useState(initialValue);

  //add user to firestore
  const addUserToFireStore = async () => {
    try {
      const docRef = await setDoc(doc(db, "users", user.email.value), {
        userDetails: user,
      });
      setUser(initialValue);
      toast("SignIn Successfully", {
        position: "bottom-center",
        pauseOnFocusLoss: true,
        autoClose: 1500,
        type: toast.TYPE.INFO,
      });

      console.log(await getDoc(doc(db, "")));
    } catch (error) {
      console.error("error occured while saveing user to firestore", error);
    }
  };

  //Add User to Firebase Authentication
  const addUser = async () => {
    try {
      if (validateUser()) {
        const auth = getAuth();
        console.log(user);
        const userDetails = await createUserWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        console.log(userDetails);
        userDetails.user && toast.info("SignUp Successfully");
        history.push({
          pathname: "/Home",
          user: userDetails.user,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const validateUser = () => {
    if (
      user.email !== "" ||
      user.password !== "" ||
      user.confirmPassword !== ""
    ) {
      if (
        !(
          user.email.includes("@") &&
          user.email.includes(".com") &&
          user.email.length > 10
        )
      ) {
        toast.error("Enter valid Mail ID.");
        return false;
      } else if (!(user.password.length >= 8 && user.password.length < 30)) {
        user.password.length < 8
          ? toast.error("Password length min : 8 ")
          : toast.error("Password length max : 30 ");
        return false;
      } else if (!(user.password === user.confirmPassword)) {
        toast.error("Password mismatch ");
        return false;
      }
    } else {
      toast.error("Enter valid details");
      return false;
    }
    return true;
  };

  return (
    <Container>
      <SignUpContainer>
        <TitleContainer>
          <HeadingDiv>
            <Heading main>SignUp</Heading>
          </HeadingDiv>
          <SignUpHeading>
            <Heading onClick={() => history.push("/SignIn")}>SignIn ▶</Heading>
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
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
            />
          </PasswordContainer>
          <PasswordContainer>
            <Label htmlFor="confirm-password-input">Confirm Password</Label>
            <Input
              borderColor={user.confirmPassword.color}
              type="password"
              id="confirm-password-input"
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({
                  ...user,
                  confirmPassword: e.target.value,
                })
              }
            />
          </PasswordContainer>
        </LoginContainer>

        <ButtonContainer>
          <Button type="button" value="Submit" onClick={addUser} />

          <Button cancel type="button" value="Cancel" />
        </ButtonContainer>
      </SignUpContainer>
    </Container>
  );
}

export default SignUp;

// styleing the components using STYLED-COMPONENT

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignUpContainer = styled.div`
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

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0px 5px;
`;

const SignUpHeading = styled.div`
  cursor: pointer;
`;

const HeadingDiv = styled.div``;
