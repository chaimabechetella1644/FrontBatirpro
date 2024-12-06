import React, { useState } from 'react'
import './login.css'
import google from './images/google.png'
import { Link } from 'react-router-dom'
import axios from 'axios';


export default function Register() {
const [credentials, setCredentials ] = useState({
    userName : '',
    password : '',
    email    :''
})

console.log(credentials);

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post('http://127.0.0.1:8000/api/check/', credentials,{
        headers: {
            "Content-Type": "application/json",
        },
    });
        console.log(response.data); 
    } catch (error) {
        console.error("oops,There was an error with the registration", error); // Handle error
    }
};


return (
    <div className='loginContainer'>
        <div className='loginbackground'>
        </div>
        <div className='logincardBackground'>
            <div className='loginCard'>
                <div className='logintitle'>
                    register
                </div>
                <div className='logininputs'>
                    <input type="text" required name="userName" placeholder='UserName' onChange={(e)=>{setCredentials({...credentials, userName : e.target.value})}} />
                    <input type="password" required name="password" placeholder='Password' onChange={(e)=>{setCredentials({...credentials, password : e.target.value})}} />
                    <input type="emai" required name="email" placeholder='email' onChange={(e)=>{setCredentials({...credentials, email : e.target.value})}} />
                </div>
                <div className='loginconnectButtons' >
                    <div className='loginconnectone' onClick={handleSubmit}>
                        Connecter
                    </div>
                    <div className='logingoogleone'>
                        <div>
                            <img src={google} alt="" />
                        </div>
                        <div>
                            Connectez-vous avec google
                        </div>
                    </div>
                </div>
                <div className='loginsign'>
                    <Link to={'/sign'}> vous n’avez pas de compte ?  s’inscrire </Link>
                </div>
                

            </div>

        </div>
    </div>
  )
}