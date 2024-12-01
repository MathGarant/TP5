import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import styles from './AdminBar.module.css'
import NavStyles from './NavBar.module.css'
const AdminBar = (props) => {
  return (
    <div className={styles.adminBar}>
        <Navbar className="flex-column text-left">
            <Nav>
                <Nav.Link className={NavStyles.navLink} to="#">Tableau de bord</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link className={NavStyles.navLink} to="#">Réservation du jour</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link className={NavStyles.navLink} to="#">Clients</Nav.Link>
            </Nav>
        </Navbar>
        <button className='btn btn-light border-black' onClick={props.closeAdminBar} style={{float:'right', fontSize:'larger'}}>X</button>
    </div>
  )
}

export default AdminBar