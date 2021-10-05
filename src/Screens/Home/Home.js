import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Home() {
  const location = useLocation();
  const history = useHistory();

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
    <div>
      <p>Home</p>
    </div>
  );
}

export default Home;
