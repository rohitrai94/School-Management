import React, { useState } from 'react';
import axios from 'axios';

const AddSchool = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        latitude: '',
        longitude: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/addSchool', formData);
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert('Error adding school.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
            <input type="number" name="latitude" placeholder="Latitude" onChange={handleChange} required />
            <input type="number" name="longitude" placeholder="Longitude" onChange={handleChange} required />
            <button type="submit">Add School</button>
        </form>
    );
};

export default AddSchool;
