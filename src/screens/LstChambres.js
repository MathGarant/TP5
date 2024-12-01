import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import lstChambresStyles from './LstChambres.module.css'
const LstChambres = (props) => {
    
  return (
    <div className={lstChambresStyles.liste}>
        {props.lesChambres.map((uneChambre) => (
            <Link to='/detailchambre' state={uneChambre} className='link-underline link-underline-opacity-0' style={{color:'black'}}>
                <div className={lstChambresStyles.capsule} key={uneChambre.id}>
                    <Row>
                        <Col xs={3} className=''>
                            <div className='justify-content-center ms-2'>
                                <img className="img-fluid" src={uneChambre.img[0]} alt="" />
                            </div>
                            
                        </Col>
                        <Col xs={9}>
                            <div style={{margin: "10px"}}>
                                <Row>
                                    <Col><h3 className="">Chambre:</h3><h4>{uneChambre.numero}</h4></Col>
                                    <Col><h3>Nombre d'occupants:</h3><h4>{uneChambre.capacite}</h4></Col>
                                </Row>
                                
                            </div>
                        </Col>
                    </Row>
                    <div className='ms-2'>
                        <h3>Description</h3>
                        <p>{uneChambre.description}</p>
                    </div>

                </div>
            </Link>
        ))}
    </div>
  )
}

export default LstChambres