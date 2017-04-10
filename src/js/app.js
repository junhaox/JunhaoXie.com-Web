import React from "react";
import ReactDOM from "react-dom";
import {Navbar, Nav, NavItem, Button, Jumbotron, Row, Col, Image, Carousel} from "react-bootstrap";

class TopMenu extends React.Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Home</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#aboutMe">About Me</NavItem>
                            <NavItem eventKey={2} href="#portfolio">Portfolio</NavItem>
                            <NavItem eventKey={3} href="#contactMe">Contact Me</NavItem>
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
                <Carousel>
                    <Carousel.Item active animtateIn animateOut>
                        <img width={2000} alt="First Image" src="src/img/1.jpg"></img>
                        <Carousel.Caption>
                            <h3>First slide</h3>
                            <p>This is the first slide</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={2000} alt="Second Image" src="src/img/2.jpg"></img>
                        <Carousel.Caption>
                            <h3>Second slide</h3>
                            <p>This is the second slide</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={2000} alt="Third Image" src="src/img/3.jpg"></img>
                        <Carousel.Caption>
                            <h3>Third slide</h3>
                            <p>This is the third slide</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

class AboutMe extends React.Component {
    render() {
        return (
            <div id="aboutText">
                <h3>Software Engineer</h3>
                <p><em>Graduating from University of California, San Diego</em></p>
                <br />
                <br />
                <Row>
                    <Col sm={4}>
                        <p><strong>Programming Languages</strong></p>
                        <Image src="src/img/swift.jpg" circle></Image>
                    </Col>
                    <Col sm={4}>
                        <p><strong>Databases</strong></p>
                        <Image src="src/img/html.png" circle></Image>
                    </Col>
                    <Col sm={4}>
                        <p><strong>Frameworks</strong></p>
                        <Image src="src/img/html.png" circle></Image>
                    </Col>
                </Row>
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