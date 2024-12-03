import { useState } from 'react';
import './OrderInfo.css';

export function OrderInfoValidate() {

    const [orderInfoData, setOrderInfoData] = useState({
        total: "291000",
        full_name: "Ganoun Dihia",
        country: "Algeria",
        region: "Bouira",
        cartier: "110",
        mail: "d_ganoun@estin.dz",
        phone: "0662695753"
    });

    // Fonction pour valider les informations de la commande
    const handleValidate = () => {
        console.log("Saved information:", orderInfoData);  // Affiche les informations dans la console
        alert("Information saved successfully!");  // Affiche une alerte de confirmation
    };

    // Fonction pour supprimer les informations de la commande
    const handleDelete = () => {
        setOrderInfoData({});  // Réinitialise les données de la commande
        alert("Information deleted successfully!");  // Affiche une alerte de suppression
    };

    return (
        <div className="OrderInfoValidate">
            <h1>Order Information</h1> 
            <div className="order_info">
                <div className="info"> 
                    <p>Total:</p>
                    <p>{orderInfoData.total} da</p>
                </div>
                <div className="info"> 
                    <p>Full name:</p>
                    <p>{orderInfoData.full_name}</p>
                </div>
                <div className="info"> 
                    <p>Country:</p>
                    <p>{orderInfoData.country}</p>
                </div>
                <div className="info"> 
                    <p>Region:</p>
                    <p>{orderInfoData.region}</p>
                </div>
                <div className="info"> 
                    <p>Cartier:</p>
                    <p>{orderInfoData.cartier}</p>
                </div>
                <div className="info"> 
                    <p>Mail:</p>
                    <p>{orderInfoData.mail}</p>
                </div>
                <div className="info"> 
                    <p>Phone:</p>
                    <p>{orderInfoData.phone}</p>
                </div>
            </div>

            {/* Boutons pour valider ou supprimer les informations */}
            <div className="button-container">
                <button 
                    onClick={handleValidate} 
                    aria-label="Validate order information">
                    Validate
                </button>
                <button 
                    onClick={handleDelete} 
                    className="delete-button" 
                    aria-label="Delete order information">
                    Delete
                </button>
            </div>
        </div>
    );
}
