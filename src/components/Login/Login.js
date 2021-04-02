import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const GoogleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(GoogleProvider)
            .then((result) => {
                const {displayName , email} = result.user;
                const SignInUser = {
                    name :displayName ,
                    email :email
                }
                setLoggedInUser(SignInUser)
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode,errorMessage);
              
            });
    }

    return (
        <div className="container loginBtn">  
               
             <h4> Sign in {loggedInUser.name}</h4>
            
            <button onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} />Sign in With Google</button>
            <br/>
            <p>already have account?</p>
        </div>
    );
};

export default Login;