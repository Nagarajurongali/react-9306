import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MobileData } from '../../Data/MobilesData'
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../../Components/Sidenav'
import Header from '../../Components/Header'
function MobDet() {
    const [item , setItem] = useState(30)
    const { id } = useParams();
    const product = MobileData.find((ele) => ele.id === Number(id)); 


    return (
        <Row>
        <Col sm={2}>
            <Sidenav />
        </Col>
        <Col sm={10}>
        <Header/>
        <div className='container d-flex border justify-content-center bg-warning align-items-center'>
            <div>
            <img src={product.image} style={{height:'200px'}}/>
            </div>
            <div className='p-5'>
            <p>ID: {product.id}</p>
            <p>Brand: {product.Brand}</p>
            <p>Price: {product.Price}</p>
            <Link to='/cart'>
             <button className='btn btn-primary' >Add Cart</button>
            </Link>
            </div>
            
        </div>
         </Col>
        </Row>
    );
}

export default MobDet;
