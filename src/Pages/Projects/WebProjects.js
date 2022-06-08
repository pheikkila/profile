import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeSplash from "../../Images/HomeSplash.jpg";


export default function WebProjects() {
    return (
        <Container>
            <div className="fs-1">
                Web Projects
                <hr />
                <div>
                    Personal Website
                    <Row className="mt-1 d-flex align-items-center">
                        <Col>
                            <Image fluid src={HomeSplash} className="thumbnail" />
                        </Col>
                        <Col className="fs-4 text-start align-middle">
                            <div>
                                I built this website to have an idea of everything that goes into creating a website. As an added perk, I get a place to talk about some of my interests!
                            </div>
                            <br />
                            <div>
                                Language: <Link to={"https://www.javascript.com"}>Javascript</Link>
                            </div>
                            <br />
                            <div>
                                Tools: {' '}
                                <Link to={"https://reactjs.org/"}>React</Link>, {' '}
                                <Link to={"https://react-bootstrap.github.io/"}>React Bootstrap</Link>, {' '}
                                <Link to={"https://nodejs.org/en/about/"}>NodeJS</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container >
    );
}