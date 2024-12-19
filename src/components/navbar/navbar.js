import panier from './image/panier.png'
import favoris from './image/favori.png'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./navbar.css"
export function Navbar() {

    const navigate = useNavigate();
    
        const handleRedirectPanier = () => {
            navigate('/panier');
        };

        const handleRedirectFavoris = () => {
            navigate('/favoris');
        };
        const handleLogin= () =>{
            navigate('/login')
        }
        const [isloggedIn, setIsLoggedIn] = useState(false)
        const [profil_pic, setProfilPic] = useState([])
        useEffect(() => {
            const token = localStorage.getItem('authToken');
            const profilePicture = localStorage.getItem('profil_pic');
            if (token) {
                setIsLoggedIn(true);
                setProfilPic(profilePicture);
            }
        }, []);

        const scrollToSection = (id) => {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        const handleLogout = () => {
            localStorage.removeItem('authToken'); 
            localStorage.removeItem('profil_pic'); 
            localStorage.removeItem('usertype'); 
            setIsLoggedIn(false); 
            navigate('/'); 
        };
        
    return (
        <div className="navbar">
        <div className="navbar_left"></div>
        <div className="navbar_right">
            <div className="info">
                <ul>
                    <li> home </li>
                    {/* <li><Link to="home" smooth={true} duration={500}>Home</Link></li> */}
                    <li onClick={() => scrollToSection('about')}>About Us</li>
                    <li onClick={() => scrollToSection('products')}>Products</li>
                    <li onClick={() => scrollToSection('offers')}>Offers</li>
                    <li onClick={() => scrollToSection('profiles')}>Profiles</li>
                    <li onClick={() => scrollToSection('why-us')}>Why Us</li>
                </ul>
                <div className="icons">
                    <div onClick={handleRedirectPanier} style={{ cursor: 'pointer' }}>
                        <img src={panier} alt="Panier" />
                    </div>
                    <div onClick={handleRedirectFavoris} style={{ cursor: 'pointer' }}> <img src={favoris}  /></div>
                </div>
                {isloggedIn ? (
                <>
                    <button onClick={handleLogout}>Logout</button>
                    <div className="profile-icon">
                        <img
                            src={profil_pic|| 'default-avatar.png'} // Fallback image
                            alt="Profile"
                            style={{
                                borderRadius: '50%',
                                width: '34px',
                                height: '32px',
                                objectFit: 'cover',
                                position: 'absolute',
                                top: '2px',
                                right: '5px',
                                cursor: 'pointer',
                                border: '2px solid #EA5501',
                            }}
                        />
                    </div>
                </>
            ) : (
                <button onClick={() => navigate('/login')}>Connect</button>
            )}
            </div>
        </div>
    </div>

    )
}