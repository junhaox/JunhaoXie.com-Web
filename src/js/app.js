import React from "react";
import ReactDOM from "react-dom";
import {Button, Jumbotron, Row, Col, Image, Carousel, FormGroup, FormControl, Thumbnail} from "react-bootstrap";

class Cover extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item active>
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
                        <img id="aboutImg" src="src/img/html.png"></img>
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
            <div id="portfolioText">
                <h3>Portfolio</h3>
                <Row>
                    <Col sm={4}>
                        <div class="thumbnail">
                            <a href="https://github.com/junhaox/JunhaoXie.com-Web/" target="_blank"><img src="src/img/html.png"></img></a>
                            <p><strong>JunhaoXie.com</strong></p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div class="thumbnail">
                            <a href="http://watthot.com/" target="_blank"><img src="src/img/html.png"></img></a>
                            <p><strong>WattHot.com</strong></p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div class="thumbnail">
                            <a href="https://github.com/junhaox/MyConverter-iOS/" target="_blank"><img src="src/img/html.png"></img></a>
                            <p><strong>MyConverter</strong></p>
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