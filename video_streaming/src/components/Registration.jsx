import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Registration = ({ Toggle }) => {
    // State hooks for form fields
    const [rfid, setRfid] = useState('');
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [designation, setDesignation] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/register', {
                rfid,
                name,
                department,
                designation
            });
            alert('User registered successfully.');
            // Clear the form after successful registration
            setRfid('');
            setName('');
            setDepartment('');
            setDesignation('');
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Error registering user.');
        }
    };

    // Function to fetch unregistered RFID
    const handleFetchRfid = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/get_data');
            if (response.data) {
                const latestRfid = response.data.rfid; // Adjusted to access the direct RFID value
                setRfid(latestRfid);
            } else {
                alert('No unregistered RFID found.');
            }
        } catch (error) {
            console.error('Error fetching unregistered RFID:', error);
            alert('Error fetching RFID.');
        }
    };

    return (
        <div className="bg-secondary">
            <div className="px-3 bg-secondary">
                <Navbar Toggle={Toggle} />

                <h1 className="text-2xl font-bold my-4">User Registration</h1>
                <div className="p-6 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">RFID:</label>
                            <input 
                                type="text" 
                                value={rfid} 
                                readOnly 
                                className="w-full px-3 py-2 border rounded shadow-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Name:</label>
                            <input 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 border rounded shadow-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Department:</label>
                            <input 
                                type="text" 
                                value={department} 
                                onChange={(e) => setDepartment(e.target.value)}
                                className="w-full px-3 py-2 border rounded shadow-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Designation:</label>
                            <input 
                                type="text" 
                                value={designation} 
                                onChange={(e) => setDesignation(e.target.value)}
                                className="w-full px-3 py-2 border rounded shadow-sm"
                            />
                        </div>
                        <button type="button" onClick={handleFetchRfid} className="bg-primary text-white px-4 py-2 rounded shadow">
                            Fetch Latest RFID
                        </button>
                        <button type="submit" className="bg-success text-white px-4 py-2 rounded shadow">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
