import React from 'react';
import './demands.css';
import { Navbar } from '../../admin/components/navbar/navbar';
import Table from '../table/Table';

export default function Demands() {
    // Data for existing demands
    const demandInfos = [
        {
            firstName : 'Imane',
            lastName : 'Bouhafs',
            dateNaissance : '28/02/2003',
            phoneNum : "0664940605",
            aboutMe : "i'm a person that have ....",
            addresse : "Bouira",
            metier : "Maçon",
            experience : "i'm a person that have ....",
        },
        {
            firstName : 'Dihia',
            lastName : 'Ganoun',
            dateNaissance : '03/09/2002',
            phoneNum : "0664940605",
            aboutMe : "i'm a person that have ....",
            addresse : "Bouira",
            metier : "Maçon",
            experience : "i'm a person that have ....",
        }
    ];

    // Headers for the table display
    const headers = ['First name', 'Last name', 'Phone number', 'Metier'];

    return (
        <div className='DemandsContainer'>
            {/* Navbar component for navigation */}
            <Navbar />
            
            <div className='tableDemands'>
                <h1>
                    Existing Demands
                </h1>

                {/* Table component to display demand information */}
                <Table 
                    profiles={false} 
                    demmand={true} 
                    command={false}  
                    product={false} 
                    headers={headers} 
                    data={demandInfos} 
                    button={'Display'} 
                    setDisplayEdit='none' 
                />
            </div>
        </div>
    );
}
