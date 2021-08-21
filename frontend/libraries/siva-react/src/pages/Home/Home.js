import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Cards1 } from '../../components/Cards'
import { MainHeader1 } from '../../components/MainHeader'
import { Slides1 } from '../../components/Slides'

function Home() {
    return (
        <>
        <Container>

            <Row>
                <Col>
                <MainHeader1/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                <Slides1/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                <Cards1/>
                </Col>
                <Col>
                <Cards1/>
                </Col>
                <Col>
                <Cards1/>
                </Col>
            </Row>
            <br/>

        </Container>
        </>
    )
}

export default Home
