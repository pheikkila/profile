// import logo from "../logo.svg";
import { Container, Col, Row } from "react-bootstrap";
import "./Home.css";
import HomeSplash from "../../Images/HomeSplash.JPG";

export default function Home() {
    return (
        <div className="App">
            <div className="App-header">
                <div className="HomeSplashImage">
                    {/* <Container fluid>
                    </ Container> */}
                </div>
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
        </div>
    );
}