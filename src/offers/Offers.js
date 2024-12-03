import React from 'react'
import './offers.css'
import Offercard from '../components/offerCard/Offercard'
import Recherche from '../components/recherche/Recherche'
import { Navbar } from '../components/navbar/navbar'
import { Footer } from '../footer/footer'



export default function Offers() {
    const offerParams = [
        {
            title : 'General Construction Services ',
            desc : 'Manages all aspects of construction projects, ensuring completion on time and within budget.'
        },
        {
            title : 'General Construction Services ',
            desc : 'Manages all aspects of construction projects, ensuring completion on time and within budget.'
        },
        {
            title : 'General Construction Services ',
            desc : 'Manages all aspects of construction projects, ensuring completion on time and within budget.'
        },
        {
            title : 'General Construction Services ',
            desc : 'Manages all aspects of construction projects, ensuring completion on time and within budget.'
        }
    ]


  return (
    <div className='offersContainer'>
        <Navbar/>
        <div className='offerCardsBar'>
            <div className='offerPageTitle'>
                Search for a specific Offer
            </div>
            <div>
                <Recherche/>
            </div>
        </div>
        <div className='offerCardsBar'>
            <div className='offerPageTitle'>
                Our market offers
            </div>
        <div className='offerBar'>
            {offerParams.map((offer,index)=>(
                <Offercard key = {index} title={offer.title} desc={offer.desc} />
            ))}

        </div>
        </div>
        <Footer />
        
    </div>
  )
}




