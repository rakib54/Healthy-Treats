import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGripHorizontal, faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'

const Sidebar = () => {
    return (

        <div>
            <div className="sidebar d-flex flex-column justify-content-between col-md-12 py-5 px-4 font-link" style={{ height: '100vh'}}>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/dashboard" >
                            <FontAwesomeIcon icon={faGripHorizontal} /><span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addProduct">
                            <FontAwesomeIcon icon={faPlus} /><span>Add Product</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/allProducts">
                            <FontAwesomeIcon icon={faList} /><span>All Products</span>
                        </Link>
                    </li>

                </ul>
            </div>
            
        </div>


    );
};

export default Sidebar;