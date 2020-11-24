import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

const Hero = () => {
    return (
        <div className='hero_container'>
            <Jumbotron className='text-center'>
                <h4 className='text-light'>Selamat Datang</h4>
                <h1>SHARED SERVICE OPERATION</h1>
                <h1>WOYO GROUP</h1>
                
                <Button variant="primary">Temukan Loker</Button>
            </Jumbotron>
        </div>
    )
}

export default Hero
