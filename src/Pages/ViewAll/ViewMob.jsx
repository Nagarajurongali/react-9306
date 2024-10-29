import React from 'react'
import {MobileData} from '../../Data/MobilesData'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../../Components/Sidenav'
import Header from '../../Components/Header'
function ViewMob() {
    
  return (
    <Row>
        <Col sm={2}>
            <Sidenav />
        </Col>
        <Col sm={10}>
        <Header/>
        
       
    <div className='container' style={{display:'flex',flexWrap:'wrap',gap:'2%'}}>
        {
            MobileData.map((e)=>{
                return(
                    <Link to={`/viewmob/${e.id}`}>
                        <div style={{border:'2px solid', margin:'2%0',padding:'1%'}}>
                            <img src={e.image} alt="" style={{height:'200px'}} />
                            <p>{e.id}</p>
                            <p>{e.Brand}</p>
                            <p>{e.Colour}</p>
                            <p>{e.Price}</p>
                        </div>
                    </Link>
                )
            })
        }
    </div>
    </Col>
    </Row>
  )
}

export default ViewMob