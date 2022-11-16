import React from 'react';
import { Link } from 'react-router-dom';

const Error_page = () => {
    return (
        <>
            <div className="container_error">

                <div className='error_message'>
                    <h1>Page Introuvable</h1>
                    <p>
                        <Link to="/" style={{ textDecoration: 'none' }}>Retourner au Login</Link>
                    </p>
                    <p>
                        <Link to="/home" style={{ textDecoration: 'none' }}>Retourner à l'accueil</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Error_page;