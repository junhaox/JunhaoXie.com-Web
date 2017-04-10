import React from "react";
import ReactDOM from "react-dom";
import {Navbar, Nav, NavItem, Button, Jumbotron, Row, Col, Image, Carousel, FormGroup, FormControl} from "react-bootstrap";

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
                            <NavItem eventKey={2} href="#ability">Ability</NavItem>
                            <NavItem eventKey={3} href="#portfolio">Portfolio</NavItem>
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
                        <img id="aboutImg" src="src/img/swift.jpg"></img>
                    </Col>
                    <Col sm={4}>
                        <p><strong>Databases</strong></p>
                        <img id="aboutImg" src="src/img/html.png"></img>
                    </Col>
                    <Col sm={4}>
                        <p><strong>Frameworks</strong></p>
                        <img id="aboutImg" src="src/img/html.png" circle></img>
                    </Col>
                </Row>
            </div>
        )
    }
}

class Ability extends React.Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

class Contact extends React.Component {
    render() {
        return (
            <div id="contactText">
                <h3>Contact Me</h3>
                <Row>
                    <Col md={4}>
                        <p><span class="glyphicon glyphicon-map-marker"></span>San Diego, CA</p>
                        <p><span class="glyphicon glyphicon-phone"></span>Phone: 1 (415) 518-6163</p>
                        <p><span class="glyphicon glyphicon-envelope"></span>Email: junhaoxie0803@gmail.com</p>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col sm={6}>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Name" />
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Email" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

ReactDOM.render(<TopMenu />, document.getElementById("topmenu"));
ReactDOM.render(<Cover />, document.getElementById("cover"));
ReactDOM.render(<AboutMe />, document.getElementById("aboutMe"));
ReactDOM.render(<Ability />, document.getElementById("ability"));
ReactDOM.render(<Portfolio />, document.getElementById("portfolio"));