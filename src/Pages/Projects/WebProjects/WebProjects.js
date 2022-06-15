import { Container } from "react-bootstrap";
import WebProjectInstance from "../WebProjects/WebProjectInstance";


export default function WebProjects() {
    return (
        <Container>
            <div className="fs-1">
                Web Projects
                <hr />
                <WebProjectInstance props={personalproj()} />
                <br />
                <WebProjectInstance props={affordaustin()} />
                <br />
                <WebProjectInstance props={affordaustin()} />
                <br />
                <WebProjectInstance props={affordaustin()} />
                <br />
                <WebProjectInstance props={affordaustin()} />
                <br />
            </div >
        </Container >
    );
}


//todo put this in a database 
const personalproj = () => {
    return (
        {
            "title": "Personal Website",
            "image_url": "./images/HomeSplash.jpg",
            "description": "I built this website to have an idea of everything that goes into creating a website. As an added perk, I get a place to talk about some of my interests!",
            "language": "Javascript",
            "tools": "React, React Bootstrap, NodeJS, AWS",
            "gitrepo": "https://github.com/pheikkila/profile",
            "website_url": ""
        }
    );
};

const affordaustin = () => {
    return (
        {
            "title": "Afford Austin",
            "image_url": "./images/AffordAustin.jpg",
            "description": "This website was a part of my software engineering class where we had to create an internet database using three different APIs.",
            "language": "Javascript",
            "tools": "React, React Bootstrap, NodeJS, Flask, SQLAlchemy, PostgreSQL, Docker, Postman, Jest, Selenium",
            "gitrepo": "https://gitlab.com/dinesh.k.balakrishnan/cs373-website",
            "website_url": "https://www.affordaustin.me/"
        }
    );
};