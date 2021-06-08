import React from 'react-dom';
import { Link } from 'react-router-dom';
import './nav.css'

export default function Navigation() {
    return (
        <nav>
            <Link to="/lord-page">Lord page</Link>
            <Link to="/planet-page">Planet page</Link>
        </nav>

    );
}