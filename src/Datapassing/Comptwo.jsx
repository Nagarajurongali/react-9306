import React from 'react'
import Compthree from './Compthree'

function Comptwo(prop) {
  return (
    <div style={{border:'2px solid',padding:'2%'}}>
        <h3>Component Two</h3>
        
        <Compthree value={prop.value} />

    </div>
  )
}

export default Comptwo