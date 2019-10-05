import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar className="bg-dark">
          <NavbarBrand tag="a" href="/" className="text-primary">
            {" "}
            PanDetails
          </NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink tag="a" href="/addPanCard">
                {" "}
                Add PanCard
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
