import React, { useState } from 'react';
import axios from 'axios';

const ListSchools = () => {
    const [location, setLocation] = useState({ latitude: '', longitude: '' });
    const [schools, setSchools] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocation({ ...location, [name]: value });
    };

    const fetchSchools = async () => {
        try {
            const response = await axios.get('http://localhost:3000/listSchools', {
                params: location,
            });
            setSchools(response.data);
        } catch (error) {
            console.error(error);
            alert('Error fetching schools.');
        }
    };

    return (
        <div>
            <input type="number" name="latitude" placeholder="Your Latitude" onChange={handleChange} required />
            <input type="number" name="longitude" placeholder="Your Longitude" onChange={handleChange} required />
            <button onClick={fetchSchools}>Get Schools</button>
            <ul>
                {schools.map((school) => (
                    <li key={school.id}>
                        {school.name} - {school.address} (Distance: {school.distance.toFixed(2)} km)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListSchools;
