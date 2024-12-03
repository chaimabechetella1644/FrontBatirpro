
import React,{ useState} from "react";
import './contentcard.css'
import heartFill from './images/Vector.png'
import brique from './images/9cda754c2b3e6e26ed346b6903fd5210-removebg-preview.png'


export default function Card({image, description, price, productName}){

   console.log(image, description, price, productName);
   
    
    
    const [heart, setHeart] = useState(false);
    const [check, setcheck] = useState(false)
   

    function heartClick() {
        setHeart(true)
    }

    function handleClick(){
        setcheck(true)
    }
 

    return(
        <div className="contentcard">
                        <div className="img">
                            <img src={image} alt="" />
                        </div>
                        <div className="fav">
                            <div className="ism">
                                <p> {productName} </p>
                            </div>
                            <div className="coeur">
                                <img src={heart ? heartFill : heartFill } onClick={heartClick} alt="" />
                            </div>
                        </div>
                        <div className="des">
                            
                            {description}
                            
                        </div>
                        <div className="coast">
                            <div className="panier">
                                <button className="likea" onClick={handleClick} > Add to panier </button>
                            </div>
                            <div className="money">
                                {price} DZ
                            </div>
                        </div>
                    </div>
    )
}  