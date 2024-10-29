import React, { createContext, useState } from 'react'
import CompC from './CompC'

export const useContext = createContext()

function CompA() {
    const [cart , setcart] = useState(0)
  return (
    <div>
        CompA
        <button onClick={()=>setcart(cart+1)}>add cart</button>
        <useContext.Provider value={cart}>
            <CompC />
        </useContext.Provider>
    </div>
  )
}

export default CompA