import React from 'react'
import Logo from './Logo';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import FicheIcon from './FicheIcon';
import styles from './NavBar.module.css'
const NavBar = () => {
  return (
    <Navbar bg="dark" variant='dark'>
      <Row style={{width:'100%', height:'12vh'}}>
        <Col xs={2}><Logo/></Col>
        <Col xs={8}>
        <div className={styles.nav}>
          <Nav className={'me-auto mt-2'}>
            <Nav.Link>
              <Link className={styles.navLink} to='/'>Accueil</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={styles.navLink} to='/apropos'>À propos</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={styles.navLink} to='/lstchambres'>Chambres</Link>
            </Nav.Link>
          </Nav>
        </div>
        </Col>
        <Col xs={2}><FicheIcon></FicheIcon></Col>
      </Row>
    </Navbar>
  )
}

export default NavBar