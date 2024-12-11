import React from 'react';
import Navbar from './Navbar'
const Users = ({ Toggle }) => {
    return (
        <>
            <div className="px-3">
            <Navbar Toggle={Toggle}/>
            <h1>User</h1>
        </div>
        </>
    );
}

export default Users;
