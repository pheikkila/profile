import { Row, Container, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCard";

export default function NavigationCards() {
    return (
        <div className="HomeSplash bg-2">
            <Container >
                <Row >
                    <Col >
                        <ProjectCard name={"Web"} link={"/webprojects"} />
                        <ProjectCard name={"Big Data"} />
                    </Col>
                    <Col >
                        <ProjectCard name={"iOS"} />
                        <ProjectCard name={"Misc"} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}