import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data);

            alert(`Your ID success: ${response.data.id}`);

            history.push('/');
        } catch(err) {
            alert('Error in the Register, Try again.')
        }  
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Register</h1>
                    <p>Make your registration and share moments of your life with people from all over the world.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Create your account
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsApp(e.target.value)}
                    />
                    <div className="input-group">
                        <input
                            placeholder="City"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            placeholder="UF" style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUF(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}