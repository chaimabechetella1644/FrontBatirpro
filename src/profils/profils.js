
import { Navbar } from "../components/navbar/navbar"
import { Card2 } from "../components/profils_card/card"
import card_image from '../components/profils_card/images/5b8d8c75254d0c3a1bee5db241af2a89.jpg'
import Recherche from "../components/recherche/Recherche"
import { NavLink } from "react-router-dom"
import './profils.css'
import { Footer } from "../components/footer/footer"

export function Profils() {

    const cardData = [
        {
            imgSrc: card_image,
            user_name: "bouhafs imane",
            num_tlfn: "062695753",
            address: 'bejaia'
        },
        {
            imgSrc: card_image,
            user_name: "bouhafs imane",
            num_tlfn: "062695753",
            address: 'bejaia'
        },
        {
            imgSrc: card_image,
            user_name: "Ganoun Dihia",
            num_tlfn: "062695753",
            address: 'bejaia'
        },
        {
            imgSrc: card_image,
            user_name: "Ganoun Dihia",
            num_tlfn: "062695753",
            address: 'bejaia'
        },
        {
            imgSrc: card_image,
            user_name: "bouhafs imane",
            num_tlfn: "062695753",
            address: 'bejaia'
        },
        {
            imgSrc: card_image,
            user_name: "Ganoun Dihia",
            num_tlfn: "062695753",
            address: 'bejaia'
        }
    ];


    return(
        <div className="profils">
            <Navbar/>
            <div className="profils_recherche">
                <h1>Search for a specific profils</h1>
                <Recherche />
            </div>
            <div className="profills_cards">
                <h1>Plombiers</h1>
                <div className="profills_card">
                    {cardData.map((card, index) => (
                        <NavLink
                        key={index}
                        to={`/my_profils?imgSrc=${encodeURIComponent(card.imgSrc)}&user_name=${encodeURIComponent(card.user_name)}&num_tlfn=${encodeURIComponent(card.num_tlfn)}&address=${encodeURIComponent(card.address)}`}
                        >
                            <Card2 {...card} />
                        </NavLink>
                    ))}
                </div>
            </div>
            <Footer />

        </div>
    )
}