import React, { useState } from 'react';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
            } catch (error) {
                setIsSigningIn(false);
                setErrorMessage(error.message);
            }
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithGoogle();
            } catch (error) {
                setIsSigningIn(false);
                setErrorMessage(error.message);
            }
        }
    };

    return (
        <div className="signup-page">
                        <div><NavLink to="/" ><IoArrowBackCircleSharp style={{width:"45px", height:"auto", cursor:"pointer"}} color=" #fff" /></NavLink></div>
        <div className="signup-img">
            <img src="https://cdn.dribbble.com/users/3951514/screenshots/7288432/media/866b49d81c982fdecd5a22de44c5e677.gif"></img>
        </div>
        <div className="login-container">
            <form className="login-form" onSubmit={onSubmit}>
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={isSigningIn}>
                    {isSigningIn ? 'Signing In...' : 'Login'}
                </button>
                <button onClick={onGoogleSignIn} disabled={isSigningIn}>
                    {isSigningIn ? 'Signing In with Google...' : 'Sign In with Google'}
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
        </div>
    );
}

export default Login;
