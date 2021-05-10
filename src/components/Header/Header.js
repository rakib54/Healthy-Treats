import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (

        <nav Class="navbar navbar-expand-lg navbar-light font-link">
            <div Class="container-fluid nav-name">
                <Link to="/"><h1 Class="navbar-brand name"><b>Healthy Treats</b></h1></Link>
                <button Class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span Class="navbar-toggler-icon"></span>
                </button>
                <div Class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <div Class="navbar-nav navbar ">
                        <Link to ="/home" Class="nav-link active ms-2">Home</Link>
                        <Link to ="/orders" Class="nav-link active ms-2" >Orders</Link>
                        <Link to ="/admin" Class="nav-link active ms-2" >Admin</Link>
                        <Link to ="/deals" Class="nav-link active ms-2" >Deals</Link>
                        {
                            loggedInUser.email ?
                            <Link style={{color:'green'}}>{loggedInUser.name}</Link>
                            :
                            <Link to="/login" Class="btn btn-success btn-sm ms-2">login</Link>
                        }
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Header;