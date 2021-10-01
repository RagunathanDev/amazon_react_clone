import { style } from "@mui/system";
import styled from "styled-components";
function Signin() {
  return (
    <Container>
      <div>
        <Heading>SignIn</Heading>
        <Spliter />
      </div>
      <LoginContainer>
        <EmailContainer>
          <Label for="email-input">Email</Label>
          <Input type="text" id="email-input" />
        </EmailContainer>
        <PasswordContainer>
          <Label for="password-input">Password</Label>
          <Input type="text" id="password-input" />
        </PasswordContainer>
        <PasswordContainer>
          <Label for="password-input">Confirm Password</Label>
          <Input type="text" id="password-input" />
        </PasswordContainer>
      </LoginContainer>
      <ButtonContainer>
        <Button type="button" value="Submit" />

        <Button cancel type="button" value="Cancel" />
      </ButtonContainer>
    </Container>
  );
}

export default Signin;

// styleing the components using STYLED-COMPONENT

const Container = styled.div`
  width: auto;
  height: auto;
  border: 2px solid #66b5ff;
  border-radius: 10px;
`;

const Heading = styled.p`
  font-size: 25px;
  font-weight: 800;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Spliter = styled.hr`
  margin: 10px 0px;
`;
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmailContainer = styled.div`
  padding: 10px;
`;

const PasswordContainer = styled.div`
  padding: 0 10px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 5px 0;
`;

const Label = styled.label`
  font-weight: 300;
`;

const Input = styled.input`
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1), 0 0 16px rgba(0, 0, 0, 0.1);
  background-color: #d9edff;
  border: 1px solid white;
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
