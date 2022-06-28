import "./ProjectCard.css";
import { Card, Button } from "react-bootstrap";

export default function ProjectCard({ name, link }) {
    return (
        <Card bg="dark" text="white" className="mb-2 card">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button href={link} variant="primary">View Projects</Button>
            </Card.Body>
        </Card>
    );
}