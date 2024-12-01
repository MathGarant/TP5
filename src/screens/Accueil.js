import React from 'react'
import imageCouverture from '../asset/wave.jpg'
import {Row, Col} from 'react-bootstrap'
const Accueil = () => {
  return (
    <div>
      
      <h1 className='text-center mt-2'><i>Hotel Vue sur Mer</i></h1>
      <img className='w-100' src={imageCouverture} alt=""/>
      <h2 className="text-center mt-2"><i>Là où se la coûle douce</i></h2>
      <Row style={{backgroundColor:'powderblue'}}>
        <Col className='text-center'>
        <div className='mt-2'>
          <h3>Hôtel 5 <span class="fa fa-star checked" style={{color:'orange'}}></span></h3>
        </div></Col>
        <Col className='text-center'><h3 className='mt-2'>Déjeuner</h3></Col>
        <Col className='text-center'><h3 className='mt-2'>Piscine et salle de gym</h3></Col>
      </Row>
    </div>
  )
}

export default Accueil