import './PersonalInfo.css'; 

export function PersonalInfo({ infoList }) {  // Le composant reçoit une prop `infoList`, qui est une liste d'informations à afficher.
   
    return (
        <div className="perso_info">  {/* Conteneur principal pour afficher les informations personnelles */}
          <h2>Personal Information</h2>  {/* Titre de la section des informations personnelles */}
          
          <div className="class">  {/* Conteneur pour chaque élément d'information */}
            {infoList.map((item, index) => (  // Utilisation de map pour itérer sur la liste `infoList`
              <div className="class1" key={index}>  {/* Chaque élément est enveloppé dans une div avec une clé unique */}
                <p className="title">{item.title}</p>  {/* Affichage du titre de l'information (par exemple, 'FirstName') */}
                <p className="info">{item.info}</p>  {/* Affichage de la valeur de l'information (par exemple, 'Imane') */}
              </div>
            ))}
          </div>
        </div>
    );
};
