

import React, { useState } from 'react'
import './review.css'
import emptystart from './images/emptystar.png'
import fullstart from './images/fullstart.png'

function Review({display, reviews }) {

  const [showAll, setShowAll] = useState(false);
  const revlenght = reviews.length

  const elements = showAll ? reviews : reviews.slice(0, 3);
  const voirplus = () => {
    setShowAll(!showAll);
  };


  return (
    <div style={{display : display.review? 'flex' : 'none'}} className='review' >
      { (reviews.length === 0)?
        <div className='pasderevue'> pas de review pour le moment </div>
        :
        <div>
         {elements.map((review, index)=>(
        <div  key={index} className={(index === elements.length - 1)? 'reviewcontainer noborder' : 'reviewcontainer border'} >
            <div className="reviewcoor">
              <div className="coor">
                <div className="nomreview">
                  {review.client.first_name} {review.client.last_name}
                </div>
                <div className="date">
                  {review.date_avis}
                </div>
              </div>
              <div className="rate">
              
              {Number(review.note) === 0 ? (
                <>
                  <img src={emptystart} alt="" />
                  <img src={emptystart} alt="" />
                  <img src={emptystart} alt="" />
                  <img src={emptystart} alt="" />
                  <img src={emptystart} alt="" />
                </>
              ) : Number(review.note) === 1 ? (
                <>
                  <img src={fullstart} alt="" />
                  <img src={emptystart} alt="" />
                  <img src={emptystart} alt="" />
                  <img src={emptystart} alt="" />
                  <img src={emptystart} alt="" />
                </>
              ) : Number(review.note) === 2 ? (
                <>
                  <img src={fullstart} alt="" />
                  <img src={fullstart} alt="" />
                  <img src={emptystart} alt="" />
                  <img src={emptystart} alt="" />
                  <img src={emptystart} alt="" />
                </>
              ) : Number(review.note) === 3 ? (
                <>
                <img src={fullstart} alt="" />
                <img src={fullstart} alt="" />
                <img src={fullstart} alt="" />
                <img src={emptystart} alt="" />
                <img src={emptystart} alt="" />
              </>
              ) : Number(review.note) === 4 ? (
                <>
                  <img src={fullstart} alt="" />
                  <img src={fullstart} alt="" />
                  <img src={fullstart} alt="" />
                  <img src={fullstart} alt="" />
                  <img src={emptystart} alt="" />
                </>
              ) : Number(review.note) === 5 ? (
                <>
                <img src={fullstart} alt="" />
                <img src={fullstart} alt="" />
                <img src={fullstart} alt="" />
                <img src={fullstart} alt="" />
                <img src={fullstart} alt="" />
              </>
              ) : null}



                  
              </div>
            </div>
            <div className="reviewtext">
              {review.commentaire}
            </div>
          
          <div className="button" style={{display : (revlenght<= 2) ? 'none' : (index === elements.length - 1)? 'flex' : 'none'}} onClick={voirplus} >
            <button> {showAll ? 'voir moins ...' : 'voir plus ...'} </button>
          </div>
        </div>
        
         ))}
        </div>
      }
     


    </div>
  )
}

export default Review