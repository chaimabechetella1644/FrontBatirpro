import React, { useState, useEffect } from 'react'
import './hireInfor.css'
import { Navbar } from '../components/navbar/navbar'
import { Footer } from '../components/footer/footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function HireInfo({prof_id}) {
    const navigate = useNavigate();
    const [order, setOrder] = useState({
        prof_id: prof_id,
        fullName : '',
        country : '',
        region : '',
        email : '',
        cartier : '',
        phoneNumber : '',
        note : ''
    })
    const token = localStorage.getItem('authToken')
    const handelform = async() => {
        if (!token) {
            alert('Please login to hire a professional.');
            console.log("No token found.");
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/api/order', order,{
                headers: {
                'Content-Type'  : 'application/json',
                'Accept'        : 'application/json',
                'Authorization' :  `Token ${token}`
                },
                withCredentials: true 
        });
        console.log("response data",response.data);
        console.log("hire order sent successfully!")
        alert("Hire order sent successfully!")
        setOrder({
            prof_id: prof_id,
            fullName: '',
            country: '',
            region: '',
            email: '',
            cartier: '',
            phoneNumber: '',
            note: ''
        });
        navigate(`/my_profils?id=${prof_id}`)

        }catch(error){

        }
    }

  return (
    <div className='hireInfo'>
        <Navbar/>
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
            <div className='orderNow'> <button onClick={handelform}> Hire now  </button></div>
        </div>
        <Footer/>
    </div>
  )
}