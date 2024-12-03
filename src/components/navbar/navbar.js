import panier from './image/panier.png'
import favoris from './image/favori.png'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

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
    return (
        <div className="navbar">
            <div className="navbar_left"></div>
            <div className="navbar_right">
                <div className="info">
                    <ul>
                        <NavLink to='/'> home </NavLink>
                        <NavLink to='/'>About Us</NavLink>
                        <NavLink to='/' >Products</NavLink>
                        <NavLink to='/'>Offers</NavLink>
                        <NavLink to='/'>Profiles</NavLink>
                        <NavLink to='/'>Why Us</NavLink>
                    </ul>
                    <button onClick={()=>{navigate('/login')}}>connecter</button>
                    <div className="icons">
                        <div onClick={handleRedirectPanier} style={{ cursor: 'pointer' }}>
                            <img src={panier} alt="Panier" />
                        </div>
                        <div onClick={handleRedirectFavoris} style={{ cursor: 'pointer' }}> <img src={favoris}  /></div>
                    </div>
                </div>
            </div>

        </div>

    )
}