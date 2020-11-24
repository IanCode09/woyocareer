import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Avatar from '../assets/images/avatar1.png'

const Testimoni = () => {
    return (
        <div className='text-center testimoni_container'>
            <Container>
                <h3>TESTIMONI</h3>
                <Image src={Avatar}  />
                <h4>Fritz Agricia Saduk</h4>
                
                <h5>
                    “Saya sudah 10 tahun bergabung di Woyo Group, dan saat ini saya diberi tanggungjawab untuk membangun produk baru, sehingga perusahaan ini semakin berkembang“
                </h5>    
            </Container>
        </div>
    )
}

export default Testimoni
