import React, { useState } from 'react'
import './fixedleft.css'


export default function Cartfixedleft() {
    const [order, setOrder] = useState({
        fullName : '',
        country : '',
        region : '',
        email : '',
        cartier : '',
        phoneNumber : '',
        note : ''
    })

  return (
    <div className='Cartfixedleft'>
        <div className='leftInput'>
            <input type='text' placeholder='Full name' onChange={(e)=>{setOrder({...order, fullName : e.target.value})}}/>
            <input type='text'placeholder='Country' onChange={(e)=>{setOrder({...order, country : e.target.value})}} />
        </div>
        <div className='leftInput'>
            <input type='text' placeholder='Region' onChange={(e)=>{setOrder({...order, region : e.target.value})}}/>
            <input type='text' placeholder='Email' onChange={(e)=>{setOrder({...order, email : e.target.value})}}/>
        </div>
        <div className='leftInput'>
            <input type='text' placeholder='Cartier' onChange={(e)=>{setOrder({...order, cartier : e.target.value})}} />
            <input type='text' placeholder='Phone number' onChange={(e)=>{setOrder({...order, phoneNumber : e.target.value})}} />
        </div>
        <div className='cartTextContainer'> <textarea placeholder='Note to add' onChange={(e)=>{setOrder({...order, note : e.target.value})}}></textarea> </div>
        <div className='orderNow'> <button> Order now  </button></div>
    </div>
  )
}
