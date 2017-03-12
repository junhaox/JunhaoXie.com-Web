import React from "react";
import ReactDOM from "react-dom";
import {Navbar, Nav, NavItem} from "react-bootstrap";

class TopMenu extends React.Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Home</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Projects</NavItem>
                            <NavItem eventKey={2} href="#">Educations</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Contact Me</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

ReactDOM.render(<TopMenu />, document.getElementById("topmenu"));