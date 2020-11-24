import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroJob from '../components/HeroJob'
import jobsJSON from '../JSON/jobsJSON'
import Job from '../components/Job'

const JobScreen = () => {
    return (
        <div>
            <Header />
            <HeroJob />

            <Container>
                <Row>
                    {jobsJSON.map(job => (
                        <Col md={6}>
                            <Job job={job} />
                        </Col>
                    ))}
                </Row>
                
            </Container>

            <Footer />
        </div>
    )
}

export default JobScreen
