import './App.css';
import NavBar from './components/NavBar.js';
import AdminBar from './components/AdminBar.js';
import { Container, Row, Col } from 'react-bootstrap';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Accueil from './screens/Accueil.js';
import APropos from './screens/APropos.js';
import LstChambres from './screens/LstChambres.js';
import DetailsChambre from './screens/DetailsChambre.js';
import Fiche from './screens/Fiche.js';
import { useState } from 'react';
import { Button } from 'bootstrap';


function App() {

  const [showAdminBar, setShowAdminBar] = useState(false)
  function CloseAdminBar() {
    setShowAdminBar(false)
  }

  const [lesChambres, setLesChambres] = useState([
    {"id" : 1, "prix": "0", "capacite" : "4", "equipement" : "Mini-bar", "vue": "", "etage": "8", "img" : ["https://www.lebaillidesuffren.com/wp-content/uploads/sites/174/2020/06/Bailli-suffren-_2017-05-04_Chambres-renovees-12-2200x1200.jpg", "https://www.lebaillidesuffren.com/wp-content/uploads/sites/174/2020/06/Bailli-Suffren_2019-05-19_Photo_Chambres-1-2200x1200.jpg"], "numero":"420", "description" : "lorem"},
    {"id" : 2, "prix": "0", "capacite" : "", "equipement" : "", "vue": "", "etage": "", "img" : ["https://www.lebaillidesuffren.com/wp-content/uploads/sites/174/2020/06/Bailli-Suffren_2019-05-19_Photo_Chambres-1-2200x1200.jpg"], "numero":"421", "description" : ""},
    {"id" : 3, "prix": "0", "capacite" : "", "equipement" : "", "vue": "", "etage": "", "img" : [""], "numero":"422", "description" : ""},
    {"id" : 4, "prix": "0", "capacite" : "", "equipement" : "", "vue": "", "etage": "", "img" : [""], "numero":"423", "description" : ""},
    {"id" : 5, "prix": "0", "capacite" : "", "equipement" : "", "vue": "", "etage": "", "img" : [""], "numero":"424", "description" : ""}
])

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <BrowserRouter>
        <NavBar></NavBar>
        <Row style={{height:'80vh'}}>
          <Col xs={2}>{showAdminBar ? <AdminBar closeAdminBar={CloseAdminBar}/> : <button className='btn btn-light' onClick={() => {setShowAdminBar(true)}}>Ouvrir menu Admin</button>}</Col>
          <Col xs={8}>
            <Routes>
              <Route path='/' element={<Accueil/>}></Route>
              <Route path='/apropos' element={<APropos/>}></Route>
              <Route path='/detailchambre' element={<DetailsChambre/>}></Route>
              <Route path='/lstchambres' element={<LstChambres lesChambres={lesChambres}/>}></Route>
              <Route path='/fiche' element={<Fiche/>}></Route>
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
