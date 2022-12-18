import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

// const [dropdownOpen, setDropdownOpen] = useState(false);
// const toggleDrop = () => setDropdownOpen(prevState => !prevState);

class Navi extends React.Component {
  state = {
    isOpen: false,
  };

  toggleNav = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };



  render() {



    return (
      <div className='navi'>

        <Navbar color="light" light expand="md">

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/Home">Home</NavLink>
              </NavItem>
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
              <div className='selector'></div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navi;