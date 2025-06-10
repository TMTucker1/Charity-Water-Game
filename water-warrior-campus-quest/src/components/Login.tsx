import React, { useState } from 'react';

const Login: React.FC<{ onLogin: (username: string) => void }> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [isGuest, setIsGuest] = useState(false);

    const handleLogin = () => {
        if (username.trim()) {
            onLogin(username);
        }
    };

    const handleGuestLogin = () => {
        setIsGuest(true);
        onLogin('Guest');
    };

    return (
        <div className="login-container">
            <h1>Welcome to Water Warrior – Campus Quest</h1>
            <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleGuestLogin}>Continue as Guest</button>
        </div>
    );
};

export default Login;