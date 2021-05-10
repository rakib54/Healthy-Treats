import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';


const Dashboard = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser);
    return (
        <div className="row font-link">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h2 className="text-center">Welcome <b>{loggedInUser.name}</b></h2>
            </div>
        </div>
    );
};

export default Dashboard;