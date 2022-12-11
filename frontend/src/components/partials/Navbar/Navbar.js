import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import './Navbar.css'
const Navbar = () => {
    const { auth, setAuth } = useAuth();
    const allTopics = [{ id: 1, topic: 'Science', status: true }, { id: 2, topic: 'Biology', status: true }, { id: 3, topic: 'Science3', status: true }, { id: 4, topic: 'Science4', status: true }, { id: 5, topic: 'Science5', status: true }, { id: 6, topic: 'Science6', status: true }, { id: 7, topic: 'Science7', status: true },];
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/quiz-2002872-1687052.png" alt="" width={40} />QUIZapp</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="/" role='button' data-bs-toggle='dropdown' >Topics</NavLink>
                                <ul class="dropdown-menu">
                                    {allTopics.map((item) => {
                                        return (<li><NavLink class="dropdown-item" key={item.id} to={`/${item.status}`}>{item.topic}</NavLink></li>)
                                    })}
                                </ul>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>

                            {
                                auth?.id ? (<li className="nav-item ms-4">
                                    <NavLink className="nav-link btn rounded-pill btn-outline px-3 login" to="/login" onClick={() => { setAuth({}) }}>Logout</NavLink>
                                </li>) : (<><li className="nav-item ms-4">
                                    <NavLink className="nav-link btn rounded-pill btn-outline px-3 login" to="/login">Login</NavLink>
                                </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link btn rounded-pill btn-outline px-3 register" to="/register">Signup</NavLink>
                                    </li></>)
                            }


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar