import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Colab from '../components/Colab'
import Testimoni from '../components/Testimoni'

const HomeScreen = () => {
    return (
        <div>
            <Header />
            <Hero />

            <Container>
                <Colab />
            </Container>

            <Testimoni />
        </div>
    )
}

export default HomeScreen
