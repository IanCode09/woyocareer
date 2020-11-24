import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const Hero = () => {
    return (
        <div className='hero_container'>
            <Jumbotron className='text-center'>
                <h4 className='text-light'>Selamat Datang</h4>
                <h1>SHARED SERVICE OPERATION</h1>
                <h1>WOYO GROUP</h1>
                <a href='/job' className='btn btn-primary'>Temukan Loker</a>                
            </Jumbotron>
        </div>
    )
}

export default Hero
