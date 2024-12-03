import React from 'react'
import './offercard.css'
import fab from './images/customer-support (1) 2.png'
import { useNavigate } from 'react-router'



export default function Offercard({title, desc}) {
  const navigate = useNavigate()
  function handleRedirect(){
    navigate('/marketplace')
    // navigate(`/marketplace/${title}`)

  }

  return (
    <div className='offerCardContainer' onClick={() => handleRedirect()}>
        <div>
            <img src={fab} alt='oops' />
        </div>
        <div className='cardTitle'>
            {title}
        </div>
        <div className='cardDesc'>
            {desc}
        </div>
    </div>
  )
}
