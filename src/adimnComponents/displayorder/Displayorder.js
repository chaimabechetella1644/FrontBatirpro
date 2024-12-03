import React from 'react';
import './display.css';
import { Navbar } from '../../admin/components/navbar/navbar';
import Table from '../table/Table';
import { OrderInfoValidate } from '../../admin/components/OrderInfoValidate/OrderInfoValidate';
import { useLocation } from 'react-router';

export default function Displayorder() {
    // Accessing location data passed through React Router
    const location = useLocation();
    const items = location.state?.data; // Retrieve the order data passed through state

    // Table headers to display product details
    const headers = ["Product", "Prix", "Quantity", "Total"];

    // Function to calculate the total price of the products in the order
    function Total(array) {
        let total = 0;
        for (let index = 0; index < array.length; index++) {
            total = total + Number(array[index].Prix) * Number(array[index].Quantity);
        }
        return total;
    }

    return (
        <div className='DisplayOrderContainer'>
            {/* Navbar component for navigation */}
            <Navbar />

            <div className='displayContent'>
                {/* Table container for displaying order details */}
                <div className="table-container">
                    <h1>
                        Order Details
                    </h1>

                    {/* Table displaying product details */}
                    <table>
                        <thead>
                            <tr>
                                {headers.map((header, index) => (
                                    <th key={index}> {header} </th> // Loop over headers to create table columns
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {/* Loop over products in the order to display each product's details */}
                            {items.Products.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.Name}</td>
                                    <td>{item.Prix}</td>
                                    <td>{item.Quantity}</td>
                                    <td>{Number(item.Prix) * Number(item.Quantity)}</td>
                                </tr>
                            ))}
                            {/* Display the total price of the order */}
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td></td>
                                <td>{Total(items.Products)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Component to display and validate order information */}
                <OrderInfoValidate items={items} />
            </div>
        </div>
    );
}
