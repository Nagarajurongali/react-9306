import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div className='services'>
        <h1>This is Services Section</h1>
        <Link to='/about'> <button className='btn btn-primary'>More</button></Link>
    </div>
  )
}

export default Services