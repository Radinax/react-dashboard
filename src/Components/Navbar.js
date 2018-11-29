import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { FaSearch } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import styled from 'styled-components';
import '../Assets/css/navbar.css';
import icon from '../Assets/images/bluehexagon.png';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const Jsicon = styled.span`
        border: solid 1px rgba(0,0,0,.5);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        padding: 3px 7px;
        text-align: center;
        font-weight: bold;
        font-size: .9em;
    `;

    return (
      <div>
        <Navbar light expand="md">
            <NavbarBrand href="/"><img src={icon} alt="icon" width="50" height="50"/></NavbarBrand>
            <NavbarBrand href="/">Dashboard</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml" navbar>
                    <NavItem className="nav-leftmenu"><NavLink href="/components/">Network</NavLink></NavItem>
                    <NavItem className="nav-leftmenu"><NavLink href="/components/">Network</NavLink></NavItem>
                    <NavItem className="nav-leftmenu"><NavLink href="/components/">Network</NavLink></NavItem>
                    <NavItem className="nav-leftmenu"><NavLink href="/components/">Network</NavLink></NavItem>
                    <NavItem className="nav-leftmenu"><NavLink href="/components/">Network</NavLink></NavItem>
                    <NavItem className="nav-leftmenu"><NavLink href="/components/">Network</NavLink></NavItem>
                    <NavItem className="nav-leftmenu"><NavLink href="/components/">Network</NavLink></NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink className="nav-rightmenu" href="/components/"><FaSearch /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-rightmenu" href=""><FaQuestionCircle /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-rightmenu" href=""><FaBell /></NavLink>
                </NavItem>
                <UncontrolledDropdown className="nav-rightmenu" nav inNavbar>
                    <DropdownToggle nav caret>
                    <Jsicon>JS</Jsicon>
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                        Option 1
                    </DropdownItem>
                    <DropdownItem>
                        Option 2
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}