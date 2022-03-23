import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Body from "./Home/Body";
import NavBar from "./Shared_Elements/NavBar";
import Cities from "./Home/Cities";

function Home() {
  const authenticated = useSelector((state) => state.authenticated);
  const role = useSelector((state) => state.role);
  const dispatch = useDispatch();
  return (
    <>
      <NavBar title="Home" dashboard={role} />
      <div>
        <Body />
      </div>
      <div style={{ backgroundColor: "#67554", border: "black" }}>
        <Cities />
      </div>
    </>
  );
}

export default Home;
