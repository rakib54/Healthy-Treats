import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import Deals from './components/Deals/Deals';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Products/ProductDetails';
import Sidebar from './components/Sidebar/Sidebar';
import AddProduct from './components/AddProduct/AddProduct';
import AllProducts from './components/AllProducts/AllProducts';
import Dashboard from './components/Dashboard/Dashboard';

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
             <Sidebar></Sidebar>
          </PrivateRoute>
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/login">
             <Login/>
          </Route>
          <Route path="/deals">
              <Deals/>
          </Route>
          <Route path="/allProducts">
              <AllProducts></AllProducts>
          </Route>
          <Route path="/dashboard">
              <Dashboard></Dashboard>
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
