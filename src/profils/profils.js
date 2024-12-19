import { useEffect,useState } from "react";
import axios from "axios";
import { Navbar } from "../components/navbar/navbar"
import { Card2 } from "../components/profils_card/card"
import card_image from '../components/profils_card/images/5b8d8c75254d0c3a1bee5db241af2a89.jpg'
import Recherche from "../components/recherche/Recherche"
import { NavLink } from "react-router-dom"
import './profils.css'
import { Footer } from "../components/footer/footer"


export function Profils() {

    // const cardData = [
    //     {
    //         imgSrc: card_image,
    //         user_name: "bouhafs imane",
    //         num_tlfn: "062695753",
    //         address: 'bejaia'
    //     },
    //     {
    //         imgSrc: card_image,
    //         user_name: "bouhafs imane",
    //         num_tlfn: "062695753",
    //         address: 'bejaia'
    //     },
    //     {
    //         imgSrc: card_image,
    //         user_name: "Ganoun Dihia",
    //         num_tlfn: "062695753",
    //         address: 'bejaia'
    //     },
    //     {
    //         imgSrc: card_image,
    //         user_name: "Ganoun Dihia",
    //         num_tlfn: "062695753",
    //         address: 'bejaia'
    //     },
    //     {
    //         imgSrc: card_image,
    //         user_name: "bouhafs imane",
    //         num_tlfn: "062695753",
    //         address: 'bejaia'
    //     },
    //     {
    //         imgSrc: card_image,
    //         user_name: "Ganoun Dihia",
    //         num_tlfn: "062695753",
    //         address: 'bejaia'
    //     }
    // ];

    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [nom, setNom] = useState("");
    const [localisation, setLocalisation] = useState("");
    const [metiers, setMetiers] = useState([]); // List of available metiers
    const [selectedMetiers, setSelectedMetiers] = useState([]); // User's selected metiers

    // Fetch all profiles from the backend
    const fetchAllProfiles = async () => {
        try {

            const response = await axios.get("http://127.0.0.1:8000/api/professionals/");
            console.log('profils: ', response.data)
            setCardData(response.data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching all profiles:", err);
            setError(err);
            setLoading(false);
        }
    };
    const fetchMetiers = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/metiers/");
            setMetiers(response.data);
            console.log(response.data)
        } catch (error) {
            console.error("Error fetching metiers:", error);
        }
    };
    const fetchSearchResults = async (query) => {
        try {
            setLoading(true);
            const response = await axios.get(`http://127.0.0.1:8000/api/professionals/search/?nom=${nom}&localisation=${localisation}&metiers=${selectedMetiers}`); 
            setCardData(response.data);
            console.log('search result: ', response.data)
            setLoading(false);
        } catch (err) {
            console.error("Error fetching search results:", err);
            setError(err);
            setLoading(false);
        }
    };

    useEffect(()=> {
        setLoading(true);
            fetchAllProfiles();
            fetchMetiers();
    },[])

    return(
        <div className="profils">
            <Navbar/>
            <div className="profils_recherche">
                <h1>Search for a specific profils</h1>
                {/* <Recherche /> */}
                
                <div className="section2 recherche">
            <div className="inputs">
                <div className="nom">
                    <div className="underNom">Nom</div>
                    <input
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        placeholder="Enter name"
                        className="inputText"
                    />
                </div>
                <div className="nom">
                    <div className="localisation">Localisation</div>
                    <input
                        type="text"
                        value={localisation}
                        onChange={(e) => setLocalisation(e.target.value)}
                        placeholder="Enter location"
                        className="inputText"
                    />
                </div>
                <div className="nom">
            <div className="metier">Métiers</div>
            <select
                value={selectedMetiers}
                onChange={(e) => setSelectedMetiers(e.target.value)}
                className="metiers-dropdown"
            >
                <option value="">Select a métier</option>
                {metiers.map((metier) => (
                    <option key={metier.id_metier} value={metier.id_metier}>
                        {metier.nom_metier}
                    </option>
                ))}
            </select>
        </div>
                <div className="btn" onClick={fetchSearchResults}>
                    Recherche
                </div>
            </div>
        </div>
    
            </div>
            <div className="profills_cards">
            <h1>Plombiers</h1>
                {loading ? (
                    <p>Loading profiles...</p>
                ) : error ? (
                    <p>Error loading profiles. Please try again later.</p>
                ) : (
                    <div className="profills_card">
                        {cardData.map((card, index) => (
                            <NavLink
                                key={index}
                        to={`/my_profils?id=${encodeURIComponent(card.id)}`}
                            >
                                <Card2 
                                    imgSrc={card.image_url}
                                    user_name={card.client.first_name + ' ' +card.client.last_name }
                                    num_tlfn={card.client.telephone}
                                    address={card.localisation}
                                    rating = {card.avis_moyenne}/>
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
            <Footer />

        </div>
    )
}