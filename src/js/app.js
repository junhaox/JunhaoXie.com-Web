import React from "react";
import ReactDOM from "react-dom";
import {Navbar, Nav, NavItem, Button} from "react-bootstrap";

class TopMenu extends React.Component {
    render() {
        return (
            <div>
                <style type="text/css">{`
                .btn-navbar {
                    color:red;
                }
                `}</style>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Home</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#resume">Resume</NavItem>
                            <NavItem eventKey={2} href="#portfolio">Portfolio</NavItem>
                            <NavItem eventKey={3} href="#blog">Blog</NavItem>
                            <NavItem eventKey={4} href="#contact">Contact Me</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

ReactDOM.render(<TopMenu />, document.getElementById("topmenu"));