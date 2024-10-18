import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Body/Home'
import About from './Components/Body/About'
import Contact from './Components/Body/Contact'
import Services from './Components/Body/Services';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Sidenav from './Sidenav';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      
    <Row>
      <Router>
        
        <Col sm={2}>
        <Sidenav />
        </Col>
        
        <Col sm={10}>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
        </Col>
        
      </Router>
    </Row>



      {/* <Router>
       <Header/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
        <Footer/>
      </Router> */}


      
      
    </div>
  )
}

export default App