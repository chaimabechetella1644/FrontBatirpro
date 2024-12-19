
import React, { useState } from 'react';
import './login.css';
import google from './images/google.png';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Login() {
const [credentials, setCredentials] = useState({
    username: '',
    password: ''
});

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

  // Function to handle login
    const handleLogin = async () => {
        setError(''); // Clear any previous error
        setLoading(true); // Show loading state
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', credentials, {
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  // Optional: 'Authorization' if needed
                },
                withCredentials: true 
              });
              
              const token = response.data.token; 
              const user = response.data.user
              if (token) {
                localStorage.setItem('authToken', token);
                localStorage.setItem('user_type', response.data.usertype)
                localStorage.setItem('profil_pic' , user.image_url)
                navigate('/');
              }
            } catch (err) {
                console.error(err);
                setError(err.response?.data?.error || 'Login failed. Please try again.');
        } finally {
      setLoading(false); 
    }
};

    return (
    <div className="loginContainer">
      <div className="loginbackground"></div>
      <div className="logincardBackground">
        <div className="loginCard">
          <div className="logintitle">Se connecter</div>
          <div className="logininputs">
            <input
              type="text"
              required
              name="username"
              placeholder="User name"
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </div>
          <div className="loginconnectButtons">
            <div className="loginconnectone" onClick={handleLogin}>
              {loading ? 'Connecting...' : 'Connecter'}
            </div>
            <div className="logingoogleone">
              <div>
                <img src={google} alt="" />
              </div>
              <div>Connectez-vous avec google</div>
            </div>
          </div>
          {error && <div className="loginError">{error}</div>} {/* Display error if exists */}
          <div className="loginsign">
            <Link to={'/register'}>Vous n’avez pas de compte ? S’inscrire</Link>
          </div>
        </div>
      </div>
    </div>
  );
}



// import React, { useState } from 'react'
// import './login.css'
// import google from './images/google.png'
// import { Link } from 'react-router-dom'
// import axios from 'axios'


// export default function Login() {
// const [credentials, setCredentials ] = useState({
//     userName : '',
//     password : ''
// })

// console.log(credentials);




//   return (
//     <div className='loginContainer'>
//         <div className='loginbackground'>
//         </div>
//         <div className='logincardBackground'>
//             <div className='loginCard'>
//                 <div className='logintitle'>
//                     Se connecter
//                 </div>
//                 <div className='logininputs'>
//                     <input type="text" required name="userName" placeholder='UserName' onChange={(e)=>{setCredentials({...credentials, userName : e.target.value})}} />
//                     <input type="password" required name="password" placeholder='Password' onChange={(e)=>{setCredentials({...credentials, password : e.target.value})}} />
//                 </div>
//                 <div className='loginconnectButtons' >
//                     <div className='loginconnectone'>
//                         Connecter
//                     </div>
//                     <div className='logingoogleone'>
//                         <div>
//                             <img src={google} alt="" />
//                         </div>
//                         <div>
//                             Connectez-vous avec google
//                         </div>
//                     </div>
//                 </div>
//                 <div className='loginsign'>
//                     <Link to={'/register'}> vous n’avez pas de compte ?  s’inscrire </Link>
//                 </div>
                

//             </div>

//         </div>
//     </div>
//   )
// }