import React, { useState } from 'react';
import './add.css';
import { Navbar } from '../../admin/components/navbar/navbar';

export default function Addproduct() {
    
    // State to handle the file name of the uploaded image
    const [fileName, setFileName] = useState("No file chosen");

    // Function to handle the file change when the user selects an image
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Updating the state with the selected file and its name
            setProduct({ ...product, image: file });
            setFileName(file.name);
        } else {
            // Resetting the file name if no file is selected
            setFileName("No file chosen");
        }
    };

    // State to store the product data entered by the user
    const [product, setProduct] = useState({
        productName : '',
        price : '',
        description : '',
        image : '',
        quantity : ''
    });

    return (
        <div className='addProductConatainer'>
            {/* Navbar component */}
            <Navbar/>
            
            <div className='editCard'>
                <h1> Add a product </h1>
                <div className='leftInput'>
                    {/* Input for product name */}
                    <input type='text' placeholder='Product name' onChange={(e)=>{setProduct({...product, productName : e.target.value})}}/>
                    {/* Input for product price */}
                    <input type='text' placeholder='price' onChange={(e)=>{setProduct({...product, price : e.target.value})}} />
                </div>
                
                <div className='editTxtArea'>
                    <div>
                        {/* Textarea for product description */}
                        <textarea placeholder='Description' onChange={(e)=>{setProduct({...product, description : e.target.value})}} ></textarea>
                    </div>

                    <div className="file-input-container">
                        {/* File input to upload a product image */}
                        <input
                            type="file"
                            id="file"
                            className="file-input"
                            onChange={handleFileChange}
                        />
                        {/* Label for file input */}
                        <label htmlFor="file" className="file-label">
                            Choose File
                        </label>
                        {/* Display the file name once selected */}
                        <span className="file-name">{fileName}</span>
                    </div>
                </div>

                <div className='leftInput'>
                    {/* Input for product quantity */}
                    <input type='number' placeholder='Quantity' onChange={(e)=>{setProduct({...product, quantity : e.target.value})}} />
                </div>

                <div className='editButtons'>
                    {/* Cancel button */}
                    <button> Cancel </button>
                </div>
            </div>
        </div>
    );
}
