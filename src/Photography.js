import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

const Photography = () => {
    return(
        <div className="page">
            <section>
                <Container fluid style={{ lineHeight: '32px' }}>
                    <Row debug>
                        <Col xs={12} md={8} debug>xs=12 md=8</Col>
                        <Col xs={6} md={4} debug>xs=6 md=4</Col>
                    </Row>
                    <br />
                    <Row debug>
                        <Col xs={6} md={4} debug>xs=6 md=4</Col>
                        <Col xs={6} md={4} debug>xs=6 md=4</Col>
                        <Col xs={6} md={4} debug>xs=6 md=4</Col>
                    </Row>
                    <br />
                    <Row debug>
                        <Col xs={6} debug>xs=6</Col>
                        <Col xs={6} debug>xs=6</Col>
                    </Row>
                </Container>
            </section>
        </div>   
    )
}

export default Photography;