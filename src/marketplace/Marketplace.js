import React from 'react'
import './marketplace.css'
import Filter from '../components/filter/Filter'
import image from '../card/images/brique.png'
import Card from '../card/Card'
import { Navbar } from '../components/navbar/navbar'
import { Footer } from '../footer/footer'







export default function Marketplace() {
    const back = [
        {
            image : image ,
            description :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            productName: 'Brique',
            price : '100 '
        },
        {
            image : image ,
            description :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            productName: 'Brique',
            price : '100 '
        },
        {
            image : image ,
            description :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            productName: 'Brique',
            price : '100 '
        },
        {
            image : image ,
            description :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            productName: 'Brique',
            price : '100 '
        },
        {
            image : image ,
            description :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            productName: 'Brique',
            price : '100 '
        }
    ]
  return (
    <div className='offersContainer'>
        <Navbar/>
            
        <div className='marketPlaceContainer'>
            <Filter/>
            <div className='marketPlaceCardBar'>
                <div className='titleMarketplace'>
                    Our Available Products
                </div>
                <div className='marketPlaceCards'>
                    {back.map((todo, index)=>{
                                        return( <Card   
                                                    key={index + 1}   
                                                    product_id = {index} 
                                                    image = {todo.image} 
                                                    description = {todo.description} 
                                                    productName={todo.productName} 
                                                    price={todo.price} 
                                                />)
                                    })}
                </div>
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}
