import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {useLocation} from 'react-router-dom'
import styles from './DetailsChambre.module.css'

const DetailsChambre = () => {
    const location = useLocation();
    const laChambre = location.state;
    return (
    <div className={styles.detailContainer}>
        <div className={styles.capsule}>
            <h1 className='text-center'>Chambre {laChambre.numero}</h1>
            {/*<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                            <img class="d-block w-100" src={laChambre.img[0]} alt="First slide"/>
                    </div>
                    {laChambre.img.map((uneImage, index) => (
                        <div class="carousel-item">
                            <img class="d-block w-100" src={uneImage} alt="First slide"/>
                        </div>                            
                    ))}                                      
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>    
            </div>*/}

            {/*Pas réussi à faire fonctionner le carousel avec un array d'un object json, donc montre la première image */}
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active d-flex justify-content-center">
                    <img class="d-block w-75" src={laChambre.img[0]} alt="First slide"/>
                </div>
            </div>
            </div>
            <Row>
                <Col xs={{span:2, offset:2}}>
                <div>
                    <h4 className='d-inline'>Étage: </h4>{laChambre.etage}
                </div>
                    
                </Col>
                <Col xs={{span:3, offset:3}}>
                    <h4 className='d-inline'>Équipement: </h4>{laChambre.equipement}
                </Col>
            </Row>
            <Row>
                <Col xs={{span:1, offset:8}}>
                    <div className='mt-1'>
                        <h4 className='d-inline-block'>Prix: </h4>{laChambre.prix}
                    </div>
                </Col>
                <Col xs={2}><button className='btn btn-warning border-black'>Réserver maintenant</button></Col>
            </Row>
        </div>
    </div>
  )
}

export default DetailsChambre