import React, { useState } from 'react';
import './products.css';
import { Navbar } from '../../admin/components/navbar/navbar';
import Table from '../table/Table';
import Editcard from '../editcard/Editcard';

export default function Products() {
    // Example data for products (Product, Price, Quantity, and Category)
    const data = [
        { Product: "Brique", Prix: "10 DZ", Quantity: "100", Category: "Materials" },
        { Product: "Brique", Prix: "10 DZ", Quantity: "100", Category: "Materials" },
        { Product: "Brique", Prix: "10 DZ", Quantity: "100", Category: "Materials" },
        { Product: "Brique", Prix: "10 DZ", Quantity: "100", Category: "Materials" }
    ];

    // Headers for the table based on the keys of the first data object
    const headers = Object.keys(data[0]);

    // State to control the display of the Editcard component (whether it is visible or not)
    const [displayEdit, setDisplayEdit] = useState(false);

  return (
    <div className='profileContainerContain'>
        <div className='profilesContainer'>
            <Navbar />
            <div className='leftProfileContainer'>
                <div className='profileTitle'>
                    Existing Products
                </div>
                {/* Table component to display the list of products */}
                <Table 
                    profiles={false} 
                    demmand={false} 
                    command={false} 
                    product={true} 
                    headers={headers} 
                    data={data} 
                    button={'Edit'} 
                    setDisplayEdit={setDisplayEdit} 
                />
            </div>
        </div>
        {/* Editcard component to edit the selected product */}
        <Editcard setDisplayEdit={setDisplayEdit} displayEdit={displayEdit} />
    </div>
  );
}
