import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Navbar.css';

const Navbar = () => {
    const {user, logOut, googleSignIn} = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/home" className="navbar-brand fw-bold text-danger" style={{fontStyle: "italic", fontSize: "23px"}} href="#">Break<span className="text-danger" style={{fontSize: "30px",fontStyle: "italic"}}>IT</span>Fast</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto fw-bold d-flex align-items-center">
                        <li className="nav-item">
                        <Link to="/home" className="nav-link  text-danger" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/addService" className="nav-link text-danger" aria-current="page" href="#">Add-Service</Link>
                        </li>
                        
                        <li className="nav-item">
                        <Link to="/yourOrders" className="nav-link text-danger" aria-current="page" href="#">Your Orders</Link>
                        </li>
                        
                        
                        <li className="nav-item">
                        <Link to="/mangeOrders" className="nav-link text-danger" aria-current="page" href="#">Manage Orders</Link>
                        </li>
                        
                        {user?.email ? 
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={user?.photoURL} style={{width: '30%', height: 'auto', borderRadius: '50%', border: "3px solid #DC3545"}} alt="" />
                            </a>
                            <ul className="dropdown-menu text-center border-0 text-center shadow" aria-labelledby="navbarDropdown">
                                <img src={user?.photoURL} className="mb-2" style={{width: '40%', height: 'auto', borderRadius: '50%', border: "3px solid #DC3545"}} alt="" /> <br />
                                {
                                    user?.email && <span className="text-danger">{user.displayName}</span>
                                }
                                {
                                    user?.email && <button onClick={logOut}className="btn btn-danger mt-2 text-white py-0">Log Out</button> 
                                }
                            </ul>
                        </li> :
                        <Link style={{textDecoration: 'none'}} to="/login">Login</Link>
                        }
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;