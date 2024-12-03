import React from 'react'
import './recherche.css'


export default function Recherche() {
  return (
        <div className="section2 recherche" >
            <div className="inputs" >
                <div className="nom">
                    <div className="underNom" >
                        Nom
                    </div>
                    <input type="text" />
                </div>
                <div className="nom ">
                    <div className="underNom" >
                        Nom
                    </div>
                    <input type="text" className=' inputText '/>
                </div>
                <div className="btn" >
                    Recherche
                </div>
            </div>
        </div>
  )
}
