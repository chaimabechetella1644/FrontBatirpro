import React from 'react'
import './cartafterdone.css'
import Cartfixedleft from './Cartfixedleft/Cartfixedleft'
import Cartfixedright from './Cartfixedright/Cartfixedright'
import { Navbar } from '../components/navbar/navbar'
import { Footer } from '../footer/footer'



export default function Cartafterdone() {
  return (
    <div className='cartAfterDone'>
        <Navbar/>
        <div>
            <h1>
                Details of the order
            </h1>
        </div>
        <div className='cartsFixed'>
            <Cartfixedleft/>
            <Cartfixedright/>
        </div>
        <Footer/>
    </div>
  )
}
