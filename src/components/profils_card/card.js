
import user_icons from './images/utilisateur.png'
import tlfn_icons from './images/telephone (2).png'
import localisation_icons from './images/broche-de-localisation (1).png'
import etoile from './images/etoile.png'
import etoile_plein from './images/etoile (1).png'
import './carddr.css'

export  function Card2({ imgSrc, user_name, num_tlfn, address }) {
    
    const StarRating = ({ rating }) => {
        const stars = Array(5).fill(etoile).map((star, index) => 
            index < rating ? etoile_plein : etoile
        );
        return (
            <div className="rate">
                {stars.map((star, index) => (
                    <img key={index} src={star} alt="star" />
                ))}
            </div>
        );
    };

    const x = 5;
    return(
        <div className="profil_card">
            <div className="card1">
                <div className="top">
                    <div className="color" > </div>
                    <div className="img">
                        <img src={imgSrc}  />
                    </div>
                </div>
                <StarRating rating={x} />
                <div className="text1">
                    <div className='information'>
                        <img src={user_icons}/>
                        <p>{user_name}</p>
                    </div>
                    <div className='information'>
                        <img src={tlfn_icons}/>
                        <p> {num_tlfn} </p>
                    </div>
                    <div className='information'>
                        <img src={localisation_icons}/>
                        <p> {address}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}