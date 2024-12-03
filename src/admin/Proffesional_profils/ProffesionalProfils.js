import React, { useState } from "react";
import { PersonalInfoEdit } from "../components/PersonalInfoEdit/PersonalInfoEdit";
import { Navbar } from "../components/navbar/navbar"; 
import photo from './images/5b8d8c75254d0c3a1bee5db241af2a89.jpg' 

export function ProffesionalProfils() {
 
    // Gestion de l'état des informations utilisateur avec useState
    const [userInfo, setUserInfo]= useState({
        firstName : 'Imane',
        lastName : 'Bouhafs',
        dateNaissance : '28/02/2003',
        phoneNum : "0664940605",
        Bio : "i'm a person that have ....",
        addresse : "Bouira",
        ProductCategory : "Materials",
        CardNumber : "888999000 9877",
        RegisterNumber : '99988800099'
    });

    // Transformation des informations utilisateur en une liste d'objets
    const infoList = Object.entries(userInfo).map(([key, value]) => ({
        title: key,
        info: value,
        key: key
    }));

    // Fonction de sauvegarde pour mettre à jour les informations utilisateur
    const handleSave = (updatedInfo) => {
        setUserInfo(updatedInfo); 
    }

    return (
        <div className="demmande_page">
            <Navbar /> {/* Inclusion du composant Navbar */}
            <div className="demmande_page_left">
                <h1> Profils de {userInfo.firstName } {userInfo.lastName }</h1>

                <div className="simple_profile">
                    <div className="img">
                        <img src={photo}/> {/* Affichage de la photo */}
                    </div>
                    <div className="text">
                        <h3> {userInfo.firstName } {userInfo.lastName } </h3>
                        <p> Market owner </p>
                        <p> {userInfo.addresse}</p>
                    </div>
                </div>

                {/* Affichage et modification des informations utilisateur avec PersonalInfoEdit */}
                <PersonalInfoEdit infoList={infoList.slice(0, 5)} handleSave={handleSave} />
                <PersonalInfoEdit infoList={infoList.slice(5, 8)} handleSave={handleSave} />
            </div>
        </div>
    );
};
