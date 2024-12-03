import React from 'react'
import './fixedright.css'


export default function Cartfixedright() {
  return (
    <div className='CartFixedRightContainer'>
        <div className='rightTitle' > Cart totals </div>
        <div className='rightDetails' > Number of products: 09 </div>
        <div className='rightTotal' > Total : <span> 800 DA </span> </div>
    </div>
  )
}
