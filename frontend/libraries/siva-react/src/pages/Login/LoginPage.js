import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Cards2} from '../../components/Cards'
import {Slides2} from '../../components/Slides'
import { MainHeader2 } from '../../components/MainHeader'

function LoginPage() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <MainHeader2/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                    <Slides2/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                    <Cards2/>
                    </Col>
                    <Col>
                    <Cards2/>
                    </Col>
                    <Col>
                    <Cards2/>
                    </Col>
                </Row>
                <br/>
            </Container>
        </>
    )
}

export default LoginPage
