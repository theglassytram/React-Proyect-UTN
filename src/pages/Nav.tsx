import Menu from "antd/lib/menu";
import React from "react";
import { NavLink, Link } from "react-router-dom";

const { Item } = Menu;

function Nav() {
  return (
    <>

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Item>
          <NavLink to="/home">
            Home
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/login">
            Login
          </NavLink>
        </Item>
      </Menu>
    </>
  );
}

export default Nav;
