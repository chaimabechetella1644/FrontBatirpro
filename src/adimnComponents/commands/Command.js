import React from 'react';
import { Navbar } from '../../admin/components/navbar/navbar';
import Table from '../table/Table';

export default function Command() {
    // Sample data for market commands
    const dataMarket = [
      { 
        Number : "01", 
        Name: "Dihia",  
        Date: "30/11/2024", 
        country : "Algeria",
        Region : "bouira",
        cartier : "10000",
        mail : "d_ganoun@estin.dz",
        phone : "0664940605",
        Products : [{
          Name : 'Brique', Prix : "60" , Quantity : "5"
        }, {
          Name : 'Brique', Prix : "60" , Quantity : "5"
        }]
      },
      { 
        Number : "01", 
        Name: "Dihia",  
        Date: "30/11/2024", 
        country : "Algeria",
        Region : "bouira",
        cartier : "10000",
        mail : "d_ganoun@estin.dz",
        phone : "0664940605",
        Products : [{
          Name : 'Brique', Prix : "60" , Quantity : "5"
        }, {
          Name : 'Brique', Prix : "60" , Quantity : "5"
        }]
      },
      { 
        Number : "01", 
        Name: "Dihia",  
        Date: "30/11/2024", 
        country : "Algeria",
        Region : "Alger",
        cartier : "10000",
        mail : "d_ganoun@estin.dz",
        phone : "0664940605",
        Products : [{
          Name : 'Brique', Prix : "60" , Quantity : "5"
        }, {
          Name : 'Brique', Prix : "60" , Quantity : "5"
        }]
      },
      { 
        Number : "04", 
        Name: "Imane Bouhahafs",  
        Date: "30/11/2024", 
        country : "Algeria",
        Region : "Bejaia",
        cartier : "Bordj mira",
        mail : "i_bouhafs@estin.dz",
        phone : "0664940605",
        Products : [{
          Name : 'Brique', Prix : "60" , Quantity : "5"
        }, {
          Name : 'ceman', Prix : "50" , Quantity : "10"
        }]
      }
    ];

    // Headers for the table display
    const headers = ["Number", "Name", "Date"];

    return (
      <div className='profilesContainer'>
        {/* Navbar component */}
        <Navbar/>
        
        <div className='leftProfileContainer'>
          <div className='profileTitle'>
            Existing Commands
          </div>

          {/* Table component to display the command data */}
          <Table 
            profiles={false} 
            demmand={false} 
            command={true}  
            product={false} 
            headers={headers} 
            data={dataMarket} 
            button={'Display'} 
            setDisplayEdit='none' 
          />
        </div>
      </div>
    );
}
