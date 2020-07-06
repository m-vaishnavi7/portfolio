import React,  {Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav =this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
                <Navbar style={{marginTop: "0"}} light expand="md" className="mt-0">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto mt-0" href="/">Portfolio
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link mr-5 navbar-end" to="/home">About Me</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link mr-5 navbar-end" to='/projects'>Projects</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link navbar-end" to='/contact'>Contact Me!</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        
                    </div>
                </Navbar>
        )
    }
}

export default Header;