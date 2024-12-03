
import profile_image from './images/5b8d8c75254d0c3a1bee5db241af2a89.jpg'
import './navbar.css'

export default function Navbar() {
    return(
        <div className="navbar_admin">
            <div className="logo"> 
                <img src={profile_image}/>
            </div>
            
            <div> admin name </div>
            <div > Profile</div>
            <div className='onclick'> Demmande</div>
            <div> Ajouter</div>
            <div> orders</div>
            
        </div>
    )
}