import React from 'react';
import Navbar from './Navbar'
const Logout = ({ Toggle }) => {
    return (
        <>
            <div className="px-3">
            <Navbar Toggle={Toggle}/>
            <h1>Logout</h1>
        </div>
        </>
    );
}

export default Logout;
