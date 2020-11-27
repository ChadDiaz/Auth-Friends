import React from "react";
import { Link } from "react-router-dom";
// import { Nav } from "react-bootstrap";
import styled from "styled-components";

const NavDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 5rem;
  align-items: center;
  text-decoration: none;
  background: lightblue;
  color: black;
`;

const Navigation = () => {
  return (
    <NavDiv>
      <Link to="/">Home</Link>
      <Link to="/signin">Sing In</Link>
      <Link to="/addFriend">Add A Friend</Link>
      <Link to="/protected">See Friends</Link>
    </NavDiv>
  );
};

export default Navigation;
