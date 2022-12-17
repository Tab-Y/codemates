import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


class Navi extends React.Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className='navi'>

        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
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
                <NavLink href="/profile">Profile</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navi;