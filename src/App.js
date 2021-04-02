import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import Deals from './components/Deals/Deals';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Products/ProductDetails';

export const UserContext = createContext()

function App() {
  const [loggedInUser , setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
             <Home></Home>
          </Route>
          <PrivateRoute path ="/orders">
             <Orders/>
          </PrivateRoute>
          <PrivateRoute path="/admin">
             <Admin/>
          </PrivateRoute>
          <Route path="/login">
             <Login/>
          </Route>
          <Route path="/deals">
              <Deals/>
          </Route>
          <Route path="/checkout">
              <Checkout></Checkout>
          </Route>
          <Route path="/">
              <Home/>
          </Route>
        </Switch>
      </Router>
      
    </UserContext.Provider>
  );
}

export default App;
