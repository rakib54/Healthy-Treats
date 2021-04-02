import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Orders from '../Orders/Orders';

const Products = ({product}) => {
    const [loggedInUser ,setLoggedInUser] = useContext(UserContext)
    const [Time , setTime] = useState({
        currentTime: new Date().toLocaleTimeString(),
        CurrentDate:new Date().toLocaleDateString()
    })
     

    
    const handleClickProduct = () =>{
        
        const newProduct = {...loggedInUser,...Time}
        
        fetch('https://pacific-beach-82940.herokuapp.com/buyProduct',{
            method:'POST',
            headers :{
                'Content-Type' :'application/json'
            },
            body:JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        })
        function DateTime (date){
            const newDates = {...Time}
            newDates.currentTime =date
            newDates.CurrentDate = date
            setTime(newDates)
        }
        DateTime()
    }
    

    return (
        <div className='col-md-4 shadow p-3 mb-5 bg-body rounded'>
            <img style={{height :'300px'}} src={product.imageURL} alt=""/>
            <h3 style={{textAlign :"center"}}>{product.name}</h3><br/>
            <div className="d-flex justify-content-around">
                <h3>${product.price}</h3>
                <Link to='/orders' onClick={handleClickProduct} className="btn btn-warning btn-sm">Buy now</Link>
            </div>
            
        </div>
    );
};

export default Products;