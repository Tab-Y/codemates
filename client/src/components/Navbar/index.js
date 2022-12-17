import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


class Navi extends React.Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };


  render() {



    return (
      <div className='navi'>

        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">CodeMates</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/notification">Notification</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/favorite">Favorites</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown isOpen={this.state.isOpen} onClick={this.toggle}>
                  <DropdownToggle caret>
                    Profile
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Profile</DropdownItem>
                    <DropdownItem href="/profile">View</DropdownItem>
                    <DropdownItem href="/newproblem">New Problem</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href='/logout'>Logout</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navi;