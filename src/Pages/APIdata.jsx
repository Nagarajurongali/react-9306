import React, { useEffect, useState } from 'react'

function APIdata() {
    const [Value , setValue] = useState(0);

    useEffect(()=>{
       async function getData(){
            const data = await fetch('https://dummyjson.com/products');
            const res = await data.json();
            let dataval = res.products
            console.log(dataval);
            setValue (res.products)

        }
        getData()
    })
  return (
    <div >
    {
      Value.map((e)=>{
        return(
          <div className='getdat'>
            <img src={e.images} alt="" />
            <p>{e.id}</p>
          </div>
        )
      })
    }
  </div>
  )
}

export default APIdata