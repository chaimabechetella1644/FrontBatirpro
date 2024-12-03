import { useLocation } from "react-router"; 
import { Navbar } from "../components/navbar/navbar"; // Composant Navbar.
import { PersonalInfo } from "../components/personnal_info/PersonalInfo"; // Composant pour afficher les informations personnelles.
import photo from './images/5b8d8c75254d0c3a1bee5db241af2a89.jpg'; // Importation de l'image du profil.
import './Marketowner.css';

export function Marketowner() {
    const location = useLocation(); // Récupération de l'objet location pour extraire les données transmises.
    const personalInfo = location.state?.data; // Accès sécurisé aux données transmises via location.state.

    // Transformation des informations personnelles en une liste de paires clé-valeur
    const infoList = Object.entries(personalInfo).map(([key, value]) => ({
        title: key,
        info: value
    }));

    return (
        <div className="demmande_page">
            <Navbar /> {/* Inclusion de la barre de navigation */}
            <div className="demmande_page_left">
                <h1> Marketowner </h1>
                <div className="simple_profile">
                    <div className="img">
                        <img src={photo} /> {/* Affichage de l'image du profil */}
                    </div>
                    <div className="text">
                        <h3> {personalInfo.firstName} {personalInfo.lastName} </h3> {/* Affichage du nom complet */}
                        <p> Market owner </p>
                        <p> {personalInfo.addresse} </p> {/* Adresse extraite des données */}
                    </div>
                </div>

                {/* Affichage des informations personnelles en deux segments */}
                <PersonalInfo infoList={infoList.slice(0, 5)} />
                <PersonalInfo infoList={infoList.slice(5, 9)} />
            </div>
        </div>
    );
}
