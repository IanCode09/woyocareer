import React from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'

const Job = ({ job }) => {
    return (
        <Row className='jobscreen_container'>
            <Col md={4}>
                <Image src={job.imageUrl} alt={job.imageName} style={{ width:'150px' }} />
            </Col>

            <Col md={8}>
                <h4><strong>{job.companyName}</strong></h4>
                <h6>{job.category}</h6>
                <h5 style={{ marginTop: '20px' }}><strong>{job.jobName}</strong></h5>
                <h6 style={{ color:'red' }}>{job.deadline}</h6>
                <Button style={{ marginTop: '10px' }}>Detail Pekerjaan</Button>
            </Col> 
        </Row>
    )
}

export default Job
