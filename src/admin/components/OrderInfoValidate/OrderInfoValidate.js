import { useState, useRef } from 'react';  // Importation des hooks nécessaires de React
import './OrderInfoValidate.css';  // Importation du fichier CSS

import validate from './images/Subtract.png';  // Importation de l'image pour la validation

export function OrderInfoValidate({ items }) {
    console.log(items);  // Affiche les informations de la commande dans la console pour débogage

    const ele1ref = useRef(null);  // Référence pour accéder au DOM du composant "validate_page"

    // Fonction pour masquer l'élément de validation après avoir cliqué sur "ok"
    const change2 = () => {
        ele1ref.current.style.display = "none";  // Cache l'élément de validation
    }

    // Fonction pour gérer la validation de la commande
    const handleValidate = () => {
        ele1ref.current.style.display = "flex";  // Affiche l'élément de validation

        console.log("Saved information:", items);  // Affiche les informations sauvegardées
        alert("Information saved successfully!");  // Affiche une alerte indiquant que l'information a été sauvegardée
    };

    // Fonction pour gérer la suppression de la commande
    const handleDelete = () => {
        // setOrderInfoData({});  // Ce code est commenté mais permettrait de réinitialiser les données de commande
        alert("Information deleted successfully!");  // Affiche une alerte indiquant que l'information a été supprimée
    };

    return (
        <div>
            <div className="OrderInfoValidate">
                <h1>Order Information</h1>  {/* Titre de la section */}
                <div className="order_info">
                    {/* Affichage des informations de la commande */}
                    <div className="info">
                        <p>Total :</p>
                        <p>{items.total} da</p>
                    </div>
                    <div className="info">
                        <p>Full name:</p>
                        <p>{items.full_name}</p>
                    </div>
                    <div className="info">
                        <p>Country:</p>
                        <p>{items.country}</p>
                    </div>
                    <div className="info">
                        <p>Region:</p>
                        <p>{items.Region}</p>
                    </div>
                    <div className="info">
                        <p>Cartier:</p>
                        <p>{items.cartier}</p>
                    </div>
                    <div className="info">
                        <p>Mail:</p>
                        <p>{items.mail}</p>
                    </div>
                    <div className="info">
                        <p>Phone:</p>
                        <p>{items.phone}</p>
                    </div>
                </div>

                {/* Boutons de validation et de suppression */}
                <div className="button">
                    <button onClick={handleValidate}>Validate</button>  {/* Bouton pour valider la commande */}
                    <button className="delete" onClick={handleDelete}>Delete</button>  {/* Bouton pour supprimer la commande */}
                </div>
            </div>

            {/* Section de confirmation de validation */}
            <div className='validate_page' ref={ele1ref}>
                <div className='img'>
                    <img src={validate} alt="Validation image" />  {/* Affichage de l'image de validation */}
                </div>
                <p>The order is validated</p>  {/* Message de confirmation */}
                <button onClick={change2}>OK</button>  {/* Bouton pour fermer la section de confirmation */}
            </div>
        </div>
    );
}
