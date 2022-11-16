import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login_page = () => {

    const [email_input, setEmail] = useState('');
    const [password_input, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = () => {
        let data = { email: email_input, password: password_input };
        if (password_input.length > 1 && email_input.length > 1) {
            axios
                .post("http://localhost:8080/login", data)
                .then((response) => {
                    console.log('log response ' + JSON.stringify(response))

                    if (response.data.password === password_input && response.data.email === email_input) {
                        //alert('success')
                        navigate('/home');
                    }
                    //navigate('/home');

                })
                .catch((error) => {
                    console.log('log error ' + error);

                });
        }
        else {
            setErrMsg('Username or password is wrong')
        }

    };


    const handleRegister = () => {
        navigate('/register');
    }

    return (
        <>
            <div className="link_responsive"></div>
            <div className="over_the_over">
                <div className="over_login">
                    <div className="back_login">
                    </div>
                </div>
            </div>
            <div className="over_contain">
                <div className="container_login">
                    <div className="title_login">
                        <img src="./img/logoblanc.png" alt="logo not load" />
                        <div className="just_for_title">
                            <h1>LOOK FOR YOUR ATHLETE</h1>
                        </div>
                        <p id='responsive_margin'>2024 SUMMER OLYMPICS</p>
                    </div>
                    <div className='form_login'>
                        <h1>MAIL</h1>
                        <input type="email" id='email_input' onChange={handleEmail} />
                        <h1>PASSWORD</h1>
                        <input type="password" id='password_input' onChange={handlePassword} />
                        <div className="error_mssg_login">
                            <span className='error_mssg_login'>{errMsg}</span>
                        </div>
                        <div className="button_login">
                            <button id='login_button' onClick={handleSubmit}>LOGIN</button>
                            <button id='register_button' onClick={handleRegister}>REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login_page;