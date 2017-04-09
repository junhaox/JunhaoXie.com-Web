import React from "react";
import ReactDOM from "react-dom";
import {Navbar, Nav, NavItem, Button, Jumbotron} from "react-bootstrap";

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
                <h1 id="coverText">Welcome to Junhao's House</h1>
            </div>
        )
    }
}

class AboutMe extends React.Component {
    render() {
        return (
            <div>
                <p id="aboutText"> I am a software developer</p>
            </div>
        )
    }
}

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <div id="portfolio1">Portfolio1</div>
                <div id="portfolio2">Portfolio2</div>
                <div id="portfolio3">Portfolio3</div>
                <div id="portfolio4">Portfolio4</div>
                <div id="portfolio5">Portfolio5</div>
                <div id="portfolio6">Portfolio6</div>
            </div>
        )
    }
}

class Test extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Welcome to Junhao's House</h1>
                    <p>This is my personal website</p>
                </Jumbotron>
            </div>
        )
    }
}

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div id="contact">Contact me</div> 
            </div>
        )
    }
}

ReactDOM.render(<TopMenu />, document.getElementById("topmenu"));
ReactDOM.render(<Cover />, document.getElementById("cover"));
ReactDOM.render(<AboutMe />, document.getElementById("aboutMe"));
ReactDOM.render(<Portfolio />, document.getElementById("portfolio"));
ReactDOM.render(<Contact />, document.getElementById("contactMe"));