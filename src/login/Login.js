import React, { useState } from 'react'
import './login.css'
import google from './images/google.png'
import { Link } from 'react-router-dom'



export default function Login() {
const [credentials, setCredentials ] = useState({
    userName : '',
    password : ''
})

console.log(credentials);



  return (
    <div className='loginContainer'>
        <div className='loginbackground'>
        </div>
        <div className='logincardBackground'>
            <div className='loginCard'>
                <div className='logintitle'>
                    Se connecter
                </div>
                <div className='logininputs'>
                    <input type="text" required name="userName" placeholder='UserName' onChange={(e)=>{setCredentials({...credentials, userName : e.target.value})}} />
                    <input type="password" required name="password" placeholder='Password' onChange={(e)=>{setCredentials({...credentials, password : e.target.value})}} />
                </div>
                <div className='loginconnectButtons' >
                    <div className='loginconnectone'>
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