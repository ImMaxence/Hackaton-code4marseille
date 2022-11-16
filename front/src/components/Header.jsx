import React from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/home');
    }

    const handleAcc = () => {
        navigate('/account');
    }

    const handleLike = () => {
        navigate('/like');
    }

    return (
        <>
            <div className="nav_bar">
                <div className="logo_site">
                    <img id='logo_nav' src="./img/real3.png" alt="logo not load" />
                </div>
                <div className="but_nav">
                    <button onClick={handleHome}>Accueil</button>
                    <button onClick={handleAcc}>Compte</button>
                    <button onClick={handleLike}>Like</button>
                </div>
            </div>
        </>
    );
};

export default Header;