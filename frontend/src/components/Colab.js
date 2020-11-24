import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Telkom from '../assets/images/telkom.png'
import Graha from '../assets/images/graha.png'
import Nutech from '../assets/images/nutech.png'
import Signet from '../assets/images/signet.png'

const Colab = () => {
    return (
        <div className='collab_container text-center'>
            <Row>
                <Col md={3}>
                    <Image src={Telkom} />
                </Col>
                <Col md={3}>
                    <Image src={Nutech} />
                </Col>
                <Col md={3}>
                    <Image src={Graha} />
                </Col>
                <Col md={3}>
                    <Image src={Signet} />
                </Col>
            </Row>
        </div>
    )
}

export default Colab
