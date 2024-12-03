import { Navbar } from "../components/navbar/navbar"; // Barre de navigation principale.
import './demande.css'; // Fichier CSS pour les styles spécifiques à la page.
import { PersonalInfo } from "../components/personnal_info/PersonalInfo"; // Composant pour afficher les informations personnelles.
import { useLocation } from "react-router"; // Hook pour accéder à l'objet location.

export function Demmande() {
    const location = useLocation(); // Récupération des données transmises via navigation.
    const personalInfo = location.state?.data; // Extraction des données utilisateur depuis `location.state`.

    // Transformation des données utilisateur en une liste d'objets clé-valeur
    const infoList = Object.entries(personalInfo).map(([key, value]) => ({
        title: key, // Nom de la propriété (ex : firstName).
        info: value, // Valeur de la propriété (ex : 'Imane').
    }));

    return (
        <div className="demmande_page">
            <Navbar /> {/* Composant Navbar */}
            <div className="demmande_page_left">
                <h1> Demande de {personalInfo.firstName} {personalInfo.lastName}</h1> {/* Titre de la page avec le nom complet de l'utilisateur */}
                
                {/* Affichage des informations utilisateur divisées en deux sections */}
                <PersonalInfo infoList={infoList.slice(0, 5)} /> 
                <PersonalInfo infoList={infoList.slice(5, 8)} />

                {/* Boutons pour valider ou supprimer la demande */}
                <div className="button">
                    <button className="Validate">Validate</button> {/* Bouton de validation */}
                    <button className="Delete">Delete</button> {/* Bouton de suppression */}
                </div>
            </div>
        </div>
    );
}
