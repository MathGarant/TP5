import React from 'react'
import styles from './FicheIcon.module.css'
import {Link} from 'react-router-dom'

const FicheIcon = () => {
  return (
    
    <Link to='fiche' className='d-flex justify-content-center link-underline link-underline-opacity-0'>
      <div className={styles.icon + ' mt-2'} style={{display: 'inline-block'}}>
        <div className={styles.iconTxt}>Fiche</div>
      </div>
    </Link>


  )
}

export default FicheIcon