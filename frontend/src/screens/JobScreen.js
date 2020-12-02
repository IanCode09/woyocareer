import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroJob from '../components/HeroJob'
// import jobsJSON from '../JSON/jobsJSON'
import Job from '../components/Job'


const JobScreen = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/job')

            console.log(data)

            setJobs(data)
        }

        fetchProducts()
    }, [])
    
    return (
        <div>
            <Header />
            <HeroJob />

            <Container>
                <Row>
                    {jobs.map(job => (
                        <Col md={6} key={job._id}>
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
