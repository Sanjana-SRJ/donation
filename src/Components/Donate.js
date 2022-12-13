import React, { useEffect } from 'react'
import Categories from './Categories'
import '../css/Donate.css'
 
function Donate() {

  useEffect(() => {
    document.title = "Donations"
  }, [])

  return (
    <div style={{ paddingTop: "81px" }}>
      <h1 className='h1'>Donate</h1>
      <h3 className='h3'>Categories</h3>
      <Categories />
    </div>
  )
}

export default Donate