import { Navbar } from "../components/navbar/navbar"; // Composant Navbar pour la navigation.
import { PersonalInfo } from "../components/personnal_info/PersonalInfo"; // Composant pour afficher les informations personnelles.
import photo from '../Marketowner/images/5b8d8c75254d0c3a1bee5db241af2a89.jpg'; // Image de profil du constructeur.

export function ConstructersProfil() {

    // Informations statiques du constructeur.
    const personalInfo = {
        firstName : 'Imane', 
        lastName : 'Bouhafs', 
        dateNaissance : '28/02/2003', 
        phoneNum : "0664940605", 
        Bio : "i'm a person that have ....",
        addresse : "Bouira", 
        metier : "Maçon", 
        experience : "i'm a person that have ....",
    }

    // Transformation des informations personnelles en une liste clé-valeur
    const infoList = Object.entries(personalInfo).map(([key, value]) => ({
        title: key, // Titre de la propriété (par exemple, "firstName")
        info: value, // Valeur de la propriété (par exemple, "Imane")
    }));

    return (
        <div className="demmande_page">
            <Navbar /> {/* Affichage de la barre de navigation */}
            <div className="demmande_page_left">
                <h1> Constructer </h1> {/* Titre de la page */}
                
                <div className="simple_profile">
                    <div className="img">
                        <img src={photo} /> {/* Affichage de l'image de profil */}
                    </div>
                    <div className="text">
                        <h3> {personalInfo.firstName} {personalInfo.lastName} </h3> {/* Affichage du nom complet */}
                        <p> Constructer </p> {/* Affichage du métier */}
                        <p> {personalInfo.addresse} </p> {/* Affichage de l'adresse */}
                    </div>
                </div>

                {/* Affichage des informations personnelles avec le composant PersonalInfo */}
                <PersonalInfo infoList={infoList.slice(0, 5)} />
                <PersonalInfo infoList={infoList.slice(5, 9)} />
            </div>
        </div>
    );
}
