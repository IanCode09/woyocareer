import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Colab from '../components/Colab'

const HomeScreen = () => {
    return (
        <div>
            <Header />
            <Hero />

            <Container>
                <Colab />
            </Container>
        </div>
    )
}

export default HomeScreen
