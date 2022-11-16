import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const Register_page = () => {

  const [email_input, setEmail] = useState('');
  const [password_input, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = () => {

    let data = { email: email_input, password: password_input };
    axios
      .post("http://localhost:8080/login", data)
      .then((response) => {

        alert('success')
        console.log('log response ' + JSON.stringify(response))
        navigate('/');

      })
      .catch((error) => {
        console.log('log error ' + error);


      });
  };

  return (
    <>
      <div className="over_register">
        <div className="back_register">
        </div>
        <Header />

        <div class="form_wrapper">
          <div class="form_container">
            <div class="title_container">
              <h2>S'enregistrer</h2>
            </div>
            <div class="row clearfix">
              <div class="">
                <form>
                  <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                    <input type="email" name="email" placeholder="Email" onChange={handleEmail} />
                  </div>
                  <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                    <input type="password" name="password" placeholder="Mot de passe" onChange={handlePassword} />
                  </div>
                  <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                    <input type="password" name="password" placeholder="Confirmez le mot de passe" />
                  </div>
                  <input class="button" type="submit" value="Valider" onClick={handleSubmit} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register_page;
