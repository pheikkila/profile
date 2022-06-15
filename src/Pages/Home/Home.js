// import logo from "../logo.svg";
import "./Home.css";
import ProjectCard from "../Projects/ProjectCard";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
        window.addEventListener('scroll', function () {
            let value = window.scrollY;
            let title = document.getElementById('Website-Title');
            let bg = document.getElementById('First-BG-Img');
            // 2/5 not official number. Just prevents bleeding into the next div
            title.style.marginTop = Math.min(value * .8, bg.offsetHeight * 2 / 5) + 'px';
        });
    }, []);

    return (
        <div className="App">
            <div className="App-header">
                <div className="HomeSplash bg-1" id="First-BG-Img">
                    <div className="main-title" id="Website-Title">
                        <h1>
                            Presley Heikkila
                        </h1>
                        <p className="fade-in-text">
                            Coder, Musician, Certified Cool Dude
                        </p>
                    </div>
                </div>
                <div className="cards">

                    <Container>
                        <Row >
                            <Col>
                                <ProjectCard />
                            </Col>
                            <Col>
                                <ProjectCard />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="HomeSplash bg-2" />

                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </div>
        </div >
    );
}