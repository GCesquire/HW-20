import React from "react";
import { Col, Row, Container } from "../components/Layout";
import Header from "../components/Header";

function Error() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Header>
                        <h1 className="text-white">404 Page Not Found</h1>
                    </Header>
                </Col>
            </Row>
    </Container>
    );
}

export default Error;