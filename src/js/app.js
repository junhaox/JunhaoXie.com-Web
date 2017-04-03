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

class Cover extends React.Component {
    render() {
        return (
            <div>
                <div id="coverText">Welcome to Junhao's House</div>
            </div>
        )
    }
}

class AboutMe extends React.Component {
    render() {
        return (
            <div>
                <div id="aboutText"> I am a software developer</div>
            </div>
        )
    }
}

ReactDOM.render(<TopMenu />, document.getElementById("topmenu"));
ReactDOM.render(<Cover />, document.getElementById("cover"));
ReactDOM.render(<AboutMe />, document.getElementById("aboutMe"));