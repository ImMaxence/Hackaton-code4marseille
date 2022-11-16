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
                    <button onClick={handleLike}>Mes likes</button>
                    <button onClick={handleAcc}>Déconnexion</button>
                </div>
            </div>
        </>
    );
};

export default Header;