import './App.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Settings from './Settings';

function App() {
    console.log("🔥 APP.JS is rendering!");

    return (
        <div className="App">

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    );
}

export default App;
