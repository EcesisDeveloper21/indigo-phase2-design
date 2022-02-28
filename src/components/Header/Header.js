
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Profile from "../../assets/images/profile.png";
import Logo from "../../assets/images/logo.png";
import Grid from "../Grid/index.js";
import "./header.css"
import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";

import { FaList, FaRegHeart } from "react-icons/fa";
import {FiMenu} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import "react-pro-sidebar/dist/css/styles.css";

function Header() {

   
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <>
    <div style={{width: '100%', display: 'flex'}}>
    <div style={{width: '20%',height: '140vh', display: 'flex'}}>



    <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
       
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiMenu/>
              ) : (
                <FiMenu/>
              )}
            </div>
          </SidebarHeader>
          <ProSidebar>
  <Menu iconShape="square">
    <MenuItem icon={<FaHome />}>Home</MenuItem>
    <SubMenu title="My Manager" icon={<FaRegHeart />}>
      <MenuItem>My Order</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
        </ProSidebar>
      </div>

    </div>
      <div style={{width: '80%', display: 'flex' , flexDirection:'column', marginRight: '20px'}}>
        <Navbar bg="#faf0e6" expand={false}>
          <Container fluid style={{position:'relative',display:'flex', justifyContent:'center'}}>
            <label
              className="Heade_title"
              style={{ fontSize: "22px", color: "#000", fontWeight: "600", display:'flex', justifyContent:'center', fontFamily: 'sf_pro_textlight' }}
            >
              <img
                src={Logo}
                alt="edit"
                width="30px"
                height="30px"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=" "
                style={{ marginRight: "20px" }}
              ></img>
              Projekt Indigo
            </label>
            <div className="nav_profile" style={{ display: "flex", position:'absolute', right: '0', top: '0' }}>
              <Navbar.Brand>
                <img
                  src={Profile}
                  alt="edit"
                  width="30px"
                  height="30px"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt=" "
                ></img>
              </Navbar.Brand>
              <NavDropdown
                bg="black"
                title="Alice P"
                id="collasible-nav-dropdown"
                style={{ color: "#5299d3",fontFamily: 'sf_pro_textlight'}}
              >
                <NavDropdown.Item style={{ color: "#5299d3" }} href="/">
                  Home
                </NavDropdown.Item>
                <NavDropdown.Item style={{ color: "#5299d3" }} href="/welcome">
                  Admin
                </NavDropdown.Item>
                <NavDropdown.Item style={{ color: "#5299d3" }} href="/users">
                  Users
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Container>
        </Navbar>
      <Grid/>
      </div>
      </div>
    </>
  );
}

export default Header;
