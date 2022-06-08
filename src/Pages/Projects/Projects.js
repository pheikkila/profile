import { Col, Container, Row, Card } from "react-bootstrap";
// import ProjectCard from "./ProjectCard";
import "./Projects.css";
import WebProjects from "./WebProjects";

export default function Projects(props) {
    return (
        // <div className="Projects-Header">
        //     <Container>
        //         Web Projects
        //         <Row className="text-dark">


        //         </Row>
        //     </Container>
        // </div>
        <WebProjects />
    );
};