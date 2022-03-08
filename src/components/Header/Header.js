import { Navbar } from "react-bootstrap";
import { Dropdown, Button, Collapse } from "react-bootstrap";
import Profile from "../../assets/images/profile.png";
import Logo from "../../assets/images/logo.png";
import "./header.css";
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
import { StickyNav } from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import "react-pro-sidebar/dist/css/styles.css";

function Header({ children }) {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [open, setOpen] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <>
    <div style={{width:"100%"}}> 
    <div className="header">
            <StickyNav length='40' style={{ with: '100%' }}>
              <Navbar bg="#faf0e6" expand={false}>
                <label
                  className="Heade_title"
                  style={{
                    fontSize: "22px",
                    color: "#000",
                    fontWeight: "600",
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "sf_pro_textlight",
                  }}
                >
                  <img
                    src={Logo}
                    width="30px"
                    height="30px"
                    className="d-inline-block align-top"
                    alt=""
                  ></img>
                  <span>
                    Projekt Indigo
                  </span>
                </label>
                <div
                  className="nav_profile"
                >
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                      <img
                        src={Profile}
                        width="30px"
                        height="30px"
                        className="d-inline-block align-top"
                        alt="ProfileImage"
                      ></img>
                      <span>
                        Alice P
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item href="#/action-1">
                        Account
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Dashboard</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Messages</Dropdown.Item>
                      <Dropdown.Item href="#/action-4">Wishlist</Dropdown.Item>
                      <Dropdown.Item href="#/action-5">Suppliers</Dropdown.Item>
                      <Dropdown.Item href="#/action-6">RFQ's</Dropdown.Item>
                      <Dropdown.Item href="#/action-7">Credit</Dropdown.Item>

                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-8">Help</Dropdown.Item>
                      <Dropdown.Item href="#/action-9">Logout</Dropdown.Item>

                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Navbar>
            </StickyNav>
          </div>
     </div>

      <div id="wrapper">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="btnToggle"
        >
          <FiMenu />
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text" className="SidebarMobileView">
            <ProSidebar id="sideBar" collapsed={menuCollapse}  >
              <SidebarHeader>
                <div className="closemenu" onClick={menuIconClick}>
                  {/* changing menu collapse icon on click */}
                  {menuCollapse ? <FiMenu /> : <FiMenu />}
                </div>
              </SidebarHeader>
              <ProSidebar>
                <Menu iconShape="square">
                  <MenuItem icon={<FaHome />}>Home</MenuItem>
                  <SubMenu title="My Manager" icon={<FaRegHeart />}>
                    <MenuItem icon={<FaRegHeart />}>My Order</MenuItem>
                    <MenuItem icon={<FaRegHeart />}>Component 2</MenuItem>
                  </SubMenu>
                </Menu>
              </ProSidebar>
            </ProSidebar>
          </div>
        </Collapse>

        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar id="sideBar" collapsed={menuCollapse}  >
          <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiMenu /> : <FiMenu />}
            </div>
          </SidebarHeader>
          <ProSidebar>
            <Menu iconShape="square">
              <MenuItem icon={<FaHome />}>Home</MenuItem>
              <SubMenu title="My Manager" icon={<FaRegHeart />}>
                <MenuItem icon={<FaRegHeart />}>My Order</MenuItem>
                <MenuItem icon={<FaRegHeart />}>Component 2</MenuItem>
              </SubMenu>
            </Menu>
          </ProSidebar>
        </ProSidebar>
        <div id="page-wrapper">
          
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}

export default Header;
