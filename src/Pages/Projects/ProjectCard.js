import { Col, Container, Row, Card } from "react-bootstrap";

export default function ProjectCard(props) {
    return (
        <Col class="col-sm-6">
            <Card className="mt-2">
                <Card.Body>
                    <Card.Img></Card.Img>
                    <Card.Title className="fs-3">Personal Webpage</Card.Title>
                    <Card.Text>A website to share my interests and projects I have done.</Card.Text>
                    <a href="/" class="btn btn-primary">Go somewhere</a>
                </Card.Body>
            </Card>
        </Col>
    );
}