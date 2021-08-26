import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import GetApi from '../../components/Api/GetApi'
import {Forms1} from '../../components/Forms1'
import BarBistro from '../../components/LifeCycleMethod/BarBistro'
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
                    <BarBistro/>
                    </Col>
                    <Col>
                    <Forms1/>
                    </Col>
                    <Col>
                    <GetApi/>
                    </Col>
                </Row>
                
            </Container>
        </>
    )
}

export default LoginPage