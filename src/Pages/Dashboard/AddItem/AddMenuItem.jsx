import React, { useState } from 'react';
import axios from 'axios';

const AddMenuItem = () => {
    // State to hold form input values
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare data to be sent
        const menuItem = { name, price, description, image };

        try {
            // Send a POST request to the backend API
            const response = await axios.post('http://localhost:5000/menu', menuItem);

            // If successful, reset form and show success message
            setMessage('Menu item added successfully!');
            setName('');
            setPrice('');
            setDescription('');
            setImage('');
        } catch (error) {
            // Handle error if the API call fails
            setMessage('Error adding menu item');
            console.error('Error adding menu item:', error);
        }
    };

    return (
        <div className="py-6 min-w-[800px]">
            <h2 className="text-2xl font-bold">Add New Menu Item</h2>

            {/* Show success or error message */}
            {message && <p className="text-lg font-semibold">{message}</p>}

            {/* Form to collect menu item data */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="form-group">
                    <label htmlFor="name" className="block text-sm font-medium">Menu Item Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 mt-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price" className="block text-sm font-medium">Price</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="w-full p-2 mt-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="block text-sm font-medium">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="w-full p-2 mt-2 border border-gray-300 rounded"
                        rows="4"
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="image" className="block text-sm font-medium">Image URL (Optional)</label>
                    <input
                        type="url"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full p-2 mt-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn bg-blue-500 text-white px-6 py-2 rounded mt-4">Add Menu Item</button>
            </form>
        </div>
    );
};

export default AddMenuItem;
