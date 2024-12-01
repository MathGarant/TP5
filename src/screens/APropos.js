import React from 'react'
import imgHotel from '../asset/hotel.jpg'
import {Row, Col} from 'react-bootstrap'
const APropos = () => {
  return (
    <div style={{backgroundColor:'#1c2a47', color:'#e0db79', padding:'10px'}}>
        <Row>
            <Col xs={6} className='text-center'>
                <h2>Notre mission</h2>
                <p style={{textAlign:'justify',textJustify: 'inter-word'}}>Offrir à nos clients une expérience inoubliable alliant luxe, détente et immersion dans un cadre naturel exceptionnel, en mettant l’accent sur le service personnalisé et le respect de l’environnement côtier. Nous nous engageons à créer un espace de bien-être où chaque séjour est synonyme de relaxation, de découvertes et de souvenirs précieux, tout en préservant la beauté naturelle et la biodiversité de notre environnement marin.</p>
                <h2>Email</h2>
                <p>hotelvuesurmer@hotmail.com</p>
                <h2>Contacts</h2>
                <p>418-234-1234</p>
            </Col>
            <Col xs={6}><img className='img-fluid' style={{borderRadius:'2px'}} src={imgHotel} alt="" /></Col>
        </Row>
    </div>
  )
}

export default APropos