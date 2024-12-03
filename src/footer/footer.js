import insta from './image/instagram (1).png'
import twitter from './image/twitter.png'
import facebook from './image/facebook.png'

import './footer.css'

export function Footer() {
    return(
        <div className="footer">
            <div className="reseau_sociaux">
                <img src={insta}/>
                <img src={twitter}/>
                <img src={facebook}/>
            </div>
            <div className="text">
                <h1> Batipro </h1>
                <p>ou vous trouverez des avocats a votre besoin </p>
            </div>
            <div className="list">
                <h1> Pages </h1>
                <ul>
                    <li> acceuil</li>
                    <li> Contact</li>
                    <li> A propos</li>
                </ul>
            </div>
        </div>
    )
}