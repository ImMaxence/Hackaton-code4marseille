
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Account_page = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/login")
            .then((response) => setData(response.data));

    }, []);

    return (
        <>
            <Header />
            <div className="info_acc">
                <h1>Informations du compte : </h1>
                {data.map((acc) => (
                    <p>Email : {acc.email}</p>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Account_page;