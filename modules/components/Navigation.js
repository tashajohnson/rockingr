import React from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'

class Navigation extends React.Component {

    render() {
        return(
           
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Rocking R Farms</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/about">About</NavItem>
                        <NavDropdown eventKey={2} title="Products" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1} href="/beefandbeefalo">Beef/Beefalo</MenuItem>
                            <MenuItem eventKey={2.2} href="/pork">Pork</MenuItem>
                            <MenuItem eventKey={2.3} href="/chicken">Chicken</MenuItem>
                            <MenuItem eventKey={2.4} href="/barleygrass">Barley Grass</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.4} href="/ordering">How to order</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={3} href="/contact">Contact</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}

export default Navigation
