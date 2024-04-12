import { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    async function handleRegister(e) {
        e.preventDefault();
        if (!isRegistering) {
            if (password !== confirmPassword) {
                setErrorMessage("Passwords do not match");
                return;
            }

            setIsRegistering(true);
            try {
                await doCreateUserWithEmailAndPassword(email, password);
            } catch (error) {
                setIsRegistering(false);
                setErrorMessage(error.message);
            }
        }
    }

    return (
        <div className="signup-page">
            <div><NavLink to="/" ><IoArrowBackCircleSharp style={{width:"45px", height:"auto", cursor:"pointer"}} color=" #fff" /></NavLink></div>
            <div className="signup-img">
                <img src="https://cdn.dribbble.com/users/218750/screenshots/2781808/media/425902f177e4186d5891593b9592fcf4.gif"></img>
            </div>
        <div className="signup-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister} className="signup-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={isRegistering}>
                    {isRegistering ? "Registering..." : "Register"}
                </button>
                {errorMessage && <p>{errorMessage}</p>}
            </form>
        </div>
        </div>
    );
};

export default SignUp;
