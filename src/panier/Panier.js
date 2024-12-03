import React, { useEffect } from 'react'
import { useState } from 'react';
import "./panier.css"
import deletbutt from './images/Union.png'
import moin from './images/dash.png'
import plus from './images/plus.png'
import { useLocation, useNavigate } from 'react-router-dom';
// import Deletecard from '../../../component/deletecard/Deletecard';
import axios from 'axios';
// import { id } from '../../../App';
import image from'../card/images/brique.png'
import { Navbar } from '../components/navbar/navbar';
import { Footer } from '../footer/footer';


export default function Panier() {
    const [panier, setPanier] = useState([
        { id: 1, product: "cerise", quantity: 1, price: 600 },
        { id: 2, product: "cerise", quantity: 1, price: 600 },
        { id: 3, product: "cerise", quantity: 1, price: 600 },
        { id: 4, product: "cerise", quantity: 1, price: 600 },
        { id: 5, product: "cerise", quantity: 1, price: 600 },
        { id: 6, product: "cerise", quantity: 1, price: 600 },
        { id: 7, product: "cerise", quantity: 1, price: 600 },
        { id: 8, product: "cerise", quantity: 1, price: 600 },
        { id: 9, product: "cerise", quantity: 1, price: 600 },
        { id: 10, product: "cerise", quantity: 1, price: 600 },
    ]);
    const [bb,setbb] = useState([
        { id: 1, product: "cerise", quantity: 1, price: 600 },
        { id: 2, product: "cerise", quantity: 1, price: 600 },
        { id: 3, product: "cerise", quantity: 1, price: 600 },
        { id: 4, product: "cerise", quantity: 1, price: 600 }
    ]  )
    
    
    // useEffect(()=>{

    //         axios.get(`http://localhost:7000/panier`)
    //         .then((res)=>{
    //             setbb(res.data)
    //         }
    //         )
    //         .catch((err)=>{
    //             console.log(err);
    //         })
       
    // }, [])
    function handledeletepanier(){
        axios.delete(`http://localhost:7000/panier`)
        .then((res)=>{
            window.location.href = '/'
        })
        .catch((err)=>{
            console.log(err);
        })
    }
 

    console.log(bb);
    const handleIncrement = (productId) => {
        setbb((prevPanier) =>
        bb.map((item) =>
            item.productID === productId
            ? { ...item, quantity: item.quantity +1 } //a la place de 10 diri max li kyn f stock
            : item
        )
        );
    };
    
    const handleDecrement = (productId) => {
        setbb((prevPanier) =>
        bb.map((item) =>
            item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        );
    };
    const resultArray = panier.map((item) => {
        const result = (Number(item.price)) * (Number(item.quantity));
        return result;
    });
    const totalSum = resultArray.reduce((acc, currentValue) => acc + currentValue, 0);
    
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [backgheightdelete, setBackgheightdelete] = useState("0px");
    const texxt='The product will disappear from your Cart'
    const [id,setid] = useState(null)
    const[idprod, setidprod] = useState(null)
    const handleDeleteClick = (e, prod) => {
        setid(e)
        setidprod(prod)
        setShowConfirmation(true);
        setBackgheightdelete("100%")
        

        };
    
        const handleDeleteConfirm = () => {
            setShowConfirmation(false);
            setBackgheightdelete("0px")
        };
        
    
        const handleDeleteCancel = () => {
            setShowConfirmation(false);
            setBackgheightdelete("0px")
        };
        const navigate = useNavigate();
        const [done, setdelevery]= useState({
            delevery : '',
            date : ''
        })
        const goToOtherPage = () => {
            navigate('/Cartdone',{ state: { totalSum, numberProducts: panier.length , back : bb, done : done} });
        };

       
        console.log(done);
    return (
        
        <div className='panier' style={{ height : (bb.length < 4) ? '100vh' : 'fit-content'}}>
            <Navbar/>
            <h2 className='paniertit'>Your cart</h2>
            {(bb.length === 0)? 
            <div className="paniercontent" style={{ height : "197px", display :'flex',alignItems :'center', fontSize : '22px'}}>
                 No adding carts for the moment 
                 </div> 
            :

            <div className='paniercontent'>
                <div className='right'>
                    <div className='fixedright'>
                        <h3>Cart Totals</h3>
                        <div className='lables'>
                            <p className='rightqst'>Do you want delevery</p>
                            <label for="radioYes">
                            <input type="radio" id="radioYes" name="delivery" value="Yes" onChange={()=>{setdelevery({...done, delevery : 'yes'})}}/>
                            Yes
                            </label>

                            <label for="radioNo">
                                <input type="radio" id="radioNo" name="delivery" onChange={()=>{setdelevery({...done, delevery : 'no'})}} value="No" />
                                No
                            </label>
                        </div>
                        <div className='total'>
                            <div><h2>Total:</h2><p>{totalSum}</p></div>
                            
                        </div>
                        <div className='bouttons'>
                            <button onClick={goToOtherPage}>Done</button>
                            {/* <button onClick={handledeletepanier} >Update the cart</button> */}
                        </div>
                        
                    </div>
                    
                </div>
                <div className='left'>
                    <table>
                        <thead>
                            <tr>
                                <th>Delete</th>
                                <th>picture</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th style={{textAlign:'center'}}>Price</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {bb.map((item, index)=>
                            <tr key={index}>
                                <td><button onClick={()=>{handleDeleteClick(item.cart_id, item.productID)}} className='delet buttonDel'>
                                    <img src={deletbutt} alt='delete' ></img>
                                    </button></td>
                                    <td>
                                    <button  className='delet imageBrique'>
                                    <img src= {image} alt='delete' ></img>
                                    {/* {`http://localhost:7000/${item.image}` */}
                                    </button></td>
                                <td>{item.product}</td>
                                <td className='plusmoin' >
                                    <button onClick={() => handleDecrement(item.productID)} className='moin'>
                                        <img alt="moin" src={moin}></img>
                                    </button>
                                    {item.quantity}
                                    <button onClick={() => handleIncrement(item.productID)}  className='plus'>
                                        <img alt="plus" src={plus}></img>
                                    </button>
                                </td>
                                <td className='pricediv'>
                                    <div>
                                    {(Number(item.price))*(1)} <span>DA</span></div>
                                    <div className='price'>{item.price} <span>DA/Unit</span></div>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            }
            <Footer/>
            {/* <div className='card-delete' style={{ height: backgheightdelete }} >
                {showConfirmation && (
                    <Deletecard
                    origin ='panier'
                    id={id}
                    texxt={texxt}
                    type='Product'
                    onCancel={handleDeleteCancel}
                    onConfirm={handleDeleteConfirm}
                    backarray = {bb}
                    idprod = {idprod}
                    />
                    )}
            </div> */}
            
        </div>
    )
}