import React from "react";
import { Link} from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #fff;
  padding: 0 30px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavMenuItem = styled.li`
  margin-left: 20px;
`;

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const NavigationBar = ({roomid}) => {



  return (
    <NavBar>
      <NavLink to="/">Home</NavLink>
      <NavMenu>
        <NavMenuItem>
          <NavLink to="/rooms/new" roomid={roomid}>Create Room</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink to="/about">About Us</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink to="/news">News</NavLink>
        </NavMenuItem>
      </NavMenu>
    </NavBar>
  );
};

export default NavigationBar;