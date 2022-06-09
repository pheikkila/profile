import { Row, Col, Image, Button } from "react-bootstrap";

export default function WebProjectInstance(props) {
    return (
        < div >
            {props.props.title}
            < Row className="mt-1 d-flex align-items-center" >
                <Col>
                    <Image fluid src={props.props.image_url} rounded={true} className="thumbnail" />
                </Col>
                <Col className="fs-4 text-start align-middle">
                    <div>
                        {props.props.description}
                    </div>
                    <br />
                    <div>
                        Language:
                        {' ' + props.props.language}
                    </div>
                    <br />
                    <div>
                        Tools:
                        {' ' + props.props.tools}
                    </div>
                    <br />
                    <Row>
                        <Col>
                            <Button variant="primary" href="https://github.com/pheikkila/profile" target="_blank">Git Repo</Button>
                        </Col>
                        <Col>
                            <Button variant="primary">More Info</Button>
                        </Col>

                    </Row>

                </Col>
            </Row >
        </div >
    );
}