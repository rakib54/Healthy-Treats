import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    return (
        
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid nav-name">
                    <h2 style={{color:'tomato'}} class="navbar-brand name" href="#">Healthy Treats</h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav navbar ">
                            <Link to ="/home" class="nav-link active">Home</Link>
                            <Link to ="/orders" class="nav-link active" >Orders</Link>
                            <Link to ="/admin" class="nav-link active" >Admin</Link>
                            <Link to ="/deals" class="nav-link active" >Deals</Link>
                            {
                                loggedInUser.email ?
                                <Link style={{color:'green'}}>{loggedInUser.name}</Link>
                                :
                                <Link to="/login" className="btn btn-success btn-sm">login</Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        
    );
};

export default Header;