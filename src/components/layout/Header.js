import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkstyle} to="/">Home</Link> | <Link to="/about" style={linkstyle}>About</Link> 
        </header>
    )
}

const headerStyle = {
    background: '#f542da',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'

}

const linkstyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header