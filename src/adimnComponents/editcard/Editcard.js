import React, { useState } from 'react';
import './editcard.css';

export default function Editcard({ displayEdit, setDisplayEdit }) {
    // Function to handle the visibility of the edit card
    function handleDisplay() {
        setDisplayEdit(false); // Set the display state to false to hide the card
    }

    // State for the file input (displayed file name)
    const [fileName, setFileName] = useState("No file chosen");

    // Function to handle file input change (when a file is selected)
    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the selected file
        if (file) {
            setProduct({ ...product, image: file }); // Update product state with the selected image
            setFileName(file.name); // Update file name to display
        } else {
            setFileName("No file chosen"); // Reset if no file is selected
        }
    };

    // State for the product details (name, price, description, etc.)
    const [product, setProduct] = useState({
        productName: '',
        price: '',
        description: '',
        image: '',
        quantity: ''
    });

    console.log(product); // Log the product state to the console for debugging

    return (
        <div className='editCardContainer' style={{ display: displayEdit ? 'flex' : 'none' }}>
            <div className='editCard'>
                <h1> Edit the product </h1>
                <div className='leftInput'>
                    {/* Input fields to edit product details */}
                    <input
                        type='text'
                        placeholder='Product name'
                        onChange={(e) => { setProduct({ ...product, productName: e.target.value }) }}
                    />
                    <input
                        type='text'
                        placeholder='price'
                        onChange={(e) => { setProduct({ ...product, price: e.target.value }) }}
                    />
                </div>
                <div className='editTxtArea'>
                    {/* Textarea to edit product description */}
                    <textarea
                        placeholder='Description'
                        onChange={(e) => { setProduct({ ...product, description: e.target.value }) }}
                    ></textarea>

                    {/* File input to upload product image */}
                    <div className="file-input-container">
                        <input
                            type="file"
                            id="file"
                            className="file-input"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="file" className="file-label">
                            Choose File
                        </label>
                        <span className="file-name">{fileName}</span>
                    </div>
                </div>
                <div className='leftInput'>
                    {/* Input field to edit product quantity */}
                    <input
                        type='number'
                        placeholder='Quantity'
                        onChange={(e) => { setProduct({ ...product, quantity: e.target.value }) }}
                    />
                </div>
                <div className='editButtons'>
                    {/* Buttons to either cancel or save the product changes */}
                    <button onClick={() => handleDisplay()}> Cancel </button>
                    <button onClick={() => handleDisplay()}> Save </button>
                </div>
            </div>
        </div>
    );
}
