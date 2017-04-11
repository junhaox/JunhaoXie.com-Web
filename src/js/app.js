import React from "react";
import ReactDOM from "react-dom";
import {Button, Jumbotron, Row, Col, Image, Carousel, FormGroup, FormControl, Thumbnail, ProgressBar} from "react-bootstrap";

class Cover extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item active>
                        <img width={2000} alt="First Image" src="src/img/cover1.png"></img>
                        <Carousel.Caption>
                            <h3>Welcome to Junhao's Website</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={2000} alt="Second Image" src="src/img/cover2.png"></img>
                        <Carousel.Caption>
                            <h3>Welcome to Junhao's Website</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={2000} alt="Third Image" src="src/img/cover3.jpeg"></img>
                        <Carousel.Caption>
                            <h3>Welcome to Junhao's Website</h3>
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
            <div>
                <Row>
                    <Col sm={5}>
                        <img src="src/img/aboutMe.jpg"></img>
                    </Col>
                    <Col sm={7}>
                        <h3>About Me</h3>
                        <p>I am a graduating student from UCSD</p>
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
                <h3>Abilities and Skills</h3>
                <p><strong>Programming Languages</strong></p>
                <p>Java</p>
                <p>C/C++</p>
                <Row>
                    <Col sm={6}>
                        <p><strong>Databases</strong></p>
                        <img src="src/img/html.png"></img>
                    </Col>
                    <Col sm={6}>
                        <p><strong>Frameworks</strong></p>
                        <img src="src/img/html.png"></img>
                    </Col>
                </Row>
            </div>
        )
    }
}

class Portfolio extends React.Component {
    render() {
        return (
            <div id="portfolioText">
                <h3>Portfolio</h3>
                <Row>
                    <Col sm={4}>
                        <div class="thumbnail">
                            <a href="https://github.com/junhaox/JunhaoXie.com-Web/" target="_blank"><img src="src/img/junhaoxie.png"></img></a>
                            <p><strong>JunhaoXie.com</strong></p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div class="thumbnail">
                            <a href="http://watthot.com/" target="_blank"><img src="src/img/watthot.png"></img></a>
                            <p><strong>WattHot.com</strong></p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div class="thumbnail">
                            <a href="https://github.com/junhaox/OnlineTrading-Web/" target="_blank"><img src="src/img/onlinetrading.jpg"></img></a>
                            <p><strong>OnlineTrading</strong></p>
                        </div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={4}>
                        <div class="thumbnail">
                            <a href="https://github.com/junhaox/MyConverter-iOS/" target="_blank"><img src="src/img/myconverter.png"></img></a>
                            <p><strong>MyConverter</strong></p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div class="thumbnail">
                            <a href="https://github.com/junhaox/SpecApp-iOS/" target="_blank"><img src="src/img/specapp.png"></img></a>
                            <p><strong>SpecApp</strong></p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div class="thumbnail">
                            <a href="https://github.com/junhaox/EarthBender-VR/" target="_blank"><img src="src/img/earthbender.png"></img></a>
                            <p><strong>EarthBender</strong></p>
                        </div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={4}>
                        <div class="thumbnail">
                            <a href="https://github.com/junhaox/Pirates-ComputerGraphics/" target="_blank"><img src="src/img/pirates.png"></img></a>
                            <p><strong>Pirates</strong></p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div class="thumbnail">
                            <a href="https://github.com/junhaox/MyBookstore-Android/" target="_blank"><img src="src/img/mybookstore.png"></img></a>
                            <p><strong>MyBookstore</strong></p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

ReactDOM.render(<Cover />, document.getElementById("cover"));
ReactDOM.render(<AboutMe />, document.getElementById("aboutMe"));
ReactDOM.render(<Ability />, document.getElementById("ability"));
ReactDOM.render(<Portfolio />, document.getElementById("portfolio"));