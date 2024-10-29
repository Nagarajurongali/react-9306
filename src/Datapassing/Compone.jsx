import React, { useState } from 'react'
import Comptwo from './Comptwo'

function Compone() {
    const [count , setCount] = useState(0)
  return (
    <div style={{border:'2px solid',padding:'2%'}}>
        <h3>Component one</h3>
        <button className='btn btn-primary' onClick={()=>setCount(count+1)}>add cart</button>
        
        <Comptwo value={count} />
    </div>
  )
}

export default Compone