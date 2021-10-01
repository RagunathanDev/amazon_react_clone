import Header from "./header/Header";
import Signin from "./Screens/signin/Signin";

import styled from "styled-components";

function App() {
  return (
    <Container>
      <Signin />
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
