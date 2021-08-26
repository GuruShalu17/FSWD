import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Forms1} from '../../components/Forms1'
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
                    <Col></Col>
                    <Col>
                    <Forms1/>
                    </Col>
                    <Col></Col>
                </Row>
                
            </Container>
        </>
    )
}

export default LoginPage