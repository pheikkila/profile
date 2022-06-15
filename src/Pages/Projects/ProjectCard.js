import { Col, Card, Button } from "react-bootstrap";

export default function ProjectCard(props) {
    return (
        <Card style={{ width: '18rem' }} bg="dark" text="white" className="mb-4">
            <Card.Body>
                <Card.Title>{props.props}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}