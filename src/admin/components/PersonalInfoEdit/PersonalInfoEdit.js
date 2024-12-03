import React, { useState } from "react";  // Importation des hooks React nécessaires

export function PersonalInfoEdit ({ infoList, handleSave }) {

  // Déclare un état `isEditing` pour savoir si on est en mode édition ou non
  const [isEditing, setIsEditing] = useState(false); 
  
  // Déclare un état `editableInfo` pour stocker les informations qui peuvent être modifiées
  const [editableInfo, setEditableInfo] = useState(infoList);

  // Fonction de gestion du changement d'entrée dans un champ de texte
  const handleInputChange = (e, key) => {
    // Met à jour l'élément modifié dans l'état `editableInfo`
    setEditableInfo((prevList) =>
      prevList.map((item) =>
        item.key === key ? { ...item, info: e.target.value } : item  // Remplace la valeur de l'info du champ modifié
      )
    );
  };

  // Fonction de gestion du bouton "Save" ou "Edit"
  const handleEditSave = () => {
    if (isEditing) {
      handleSave(editableInfo);  // Si en mode édition, sauvegarde les informations modifiées
    }
    setIsEditing(!isEditing);  // Change l'état d'édition
  };

  return (
    <div className="perso_info">
      {/* Section du titre et du bouton "Edit/Save" */}
      <div className="haut">
        <h2>Personal Information</h2>
        <button
            onClick={handleEditSave}>
            {isEditing ? "Save" : "Edit"}  {/* Change le texte du bouton en fonction du mode d'édition */}
        </button>
      </div>
      <div className="class">
        {editableInfo.map((item, index) => (
          <div className="class1" key={index} >
            <p className="title">{item.title}</p>
            {/* Si en mode édition, affiche un champ de texte ; sinon, affiche la valeur comme texte */}
            {isEditing ? (
              <input
                type="text"
                value={item.info}  // Définit la valeur du champ de texte à la valeur actuelle de l'info
                onChange={(e) => handleInputChange(e, item.key)}  // Gère le changement de valeur dans le champ
                style={{ padding: "5px", width: "70%",
                  backgroundColor: "transparent",
                  border: "2px solid",
                  borderRadius:" 28px"}}  // Styles appliqués au champ de texte
              />
            ) : (
              <p className="info">{item.info}</p>  // Si non en mode édition, affiche simplement la valeur de l'info
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
