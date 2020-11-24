import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Logo from '../assets/images/logo.png'
import { Room, Phone, Email } from '@material-ui/icons';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Image src={Logo} style={{ width: '150px' }} />

                <h5>Hubungi Kami</h5>

                <h6><Room />WoyoGroup Jl. Cidangiang Nomor 29, Bogor 16129 Indonesia</h6>
                <h6><Phone />021-765432</h6>
                <h6><Email />woyogroup@gmail.com</h6>
            </Container>
        </footer>
    )
}

export default Footer
