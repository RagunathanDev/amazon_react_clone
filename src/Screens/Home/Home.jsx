import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../features/count-splice";
import styled from "styled-components";

function Home() {
  const location = useLocation();
  const history = useHistory();

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  React.useEffect(async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user signin");
        console.log(user);
      } else {
        history.push("/TimeOut");
      }
    });
  }, [location]);

  return (
    <Container>
      <p>Home</p>
      <p>{count}</p>

      <input
        type="button"
        className="counter"
        value="Increment"
        onClick={() => dispatch(increment())}
      />
      <input
        type="button"
        className="counter"
        value="decrement"
        onClick={() => dispatch(decrement())}
      />
      <input
        type="button"
        className="counter"
        value="reset"
        onClick={() => dispatch(reset())}
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  width: auto;
`;
