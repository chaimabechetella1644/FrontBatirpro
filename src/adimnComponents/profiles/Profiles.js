import React, { useState } from 'react';
import './profiles.css';
import { Navbar } from '../../admin/components/navbar/navbar';
import Table from '../table/Table';
import Buttons from '../adminnavbar/buttons/Buttons';

export default function Profiles() {
  // Example data for constructor profiles
  const dataConstructor = [
    {
      firstName: 'Imane',
      lastName: 'Bouhafs',
      dateNaissance: '28/02/2003',
      phoneNum: "0664940605",
      Bio: "i'm a person that have ....",
      addresse: "Bouira",
      metier: "Maçon",
      experience: "i'm a person that have ....",
    },
    {
      firstName: 'Imane',
      lastName: 'Bouhafs',
      dateNaissance: '28/02/2003',
      phoneNum: "0664940605",
      Bio: "i'm a person that have ....",
      addresse: "Bouira",
      metier: "Maçon",
      experience: "i'm a person that have ....",
    },
    {
      firstName: 'Imane',
      lastName: 'Bouhafs',
      dateNaissance: '28/02/2003',
      phoneNum: "0664940605",
      Bio: "i'm a person that have ....",
      addresse: "Bouira",
      metier: "Maçon",
      experience: "i'm a person that have ....",
    },
  ];

  // Example data for marketplace profiles
  const dataMarket = [
    {
      firstName: 'Imane',
      lastName: 'Bouhafs',
      dateNaissance: '28/02/2003',
      phoneNum: "0664940605",
      Bio: "i'm a person that have ....",
      addresse: "Bouira",
      Speciality: "Materials",
      CardNumber: "888999000 9877",
      RegisterNumber: '99988800099',
    },
    {
      firstName: 'Imane',
      lastName: 'Bouhafs',
      dateNaissance: '28/02/2003',
      phoneNum: "0664940605",
      Bio: "i'm a person that have ....",
      addresse: "Bouira",
      Speciality: "Materials",
      CardNumber: "888999000 9877",
      RegisterNumber: '99988800099',
    },
    {
      firstName: 'Ganoun',
      lastName: 'Dihia',
      dateNaissance: '28/02/2003',
      phoneNum: "0664940605",
      Bio: "i'm a person that have ....",
      addresse: "Bouira",
      Speciality: "Materials",
      CardNumber: "888999000 9877",
      RegisterNumber: '99988800099',
    },
  ];

  // State to toggle between the constructor profiles and marketplace profiles
  const [option, setOption] = useState({
    constructor: true,
    marketplace: false,
  });

  // Conditionally set the headers for the table based on the selected profile type
  const headers = option.marketplace
    ? ["firstName", "lastName", "address", "Speciality"]
    : ["firstName", "lastName", "address", "metier"];

  return (
    <div className='profilesContainer'>
      <Navbar />
      <div className='leftProfileContainer'>
        <div className='profileTitle'>
          Existing Profiles
        </div>
        {/* Buttons component to switch between constructor and marketplace profiles */}
        <Buttons setOption={setOption} option={option} />
        {/* Table component to display the selected profiles */}
        <Table
          profiles={true}
          demmand={false}
          command={false}
          product={false}
          headers={headers}
          data={option.constructor ? dataConstructor : dataMarket}
          button={'Display'}
          setDisplayEdit='none'
        />
      </div>
    </div>
  );
}
