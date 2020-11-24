import React from 'react'
import { Container, Form, FormControl } from 'react-bootstrap'
import { Jumbotron, Button } from 'react-bootstrap'

const HeroJob = () => {
    return (
        <div className='herojob_container'>
            <Jumbotron>
                <Container>
                    <h2>10 Lowongan Tersedia</h2>

                    <h6>Nama Lowongan</h6>
                    <Form inline>
                        <FormControl type="text" placeholder="Cari kata kunci vacancy" className='mr-sm-2' style={{ width:'900px' }} />
                        <Button variant="primary">Cari</Button>
                    </Form>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default HeroJob
