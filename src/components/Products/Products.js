import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Product.css'
const Products = ({ product }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [Time, setTime] = useState({
        currentTime: new Date().toLocaleTimeString(),
        CurrentDate: new Date().toLocaleDateString()
    })



    const handleClickProduct = () => {

        const newProduct = { ...loggedInUser, ...Time }

        fetch('https://pacific-beach-82940.herokuapp.com/buyProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        function DateTime(date) {
            const newDates = { ...Time }
            newDates.currentTime = date
            newDates.CurrentDate = date
            setTime(newDates)
        }
        DateTime()
    }


    return (
        <div className="col-md-4 products d-flex justify-content-center text-center col-sm-6 col-lg-4 mt-5">
        <div className="card" style={{ width: '20rem' }}>
            <div className="inner">
                <img style={{height:'250px'}} className="card-img-top" src={product.imageURL} alt="Card image cap" />

            </div>
            <div className="card-body">
                <h4 style={{height:'50px',color:'crimson'}} className="card-title text-center">{product.name}</h4>
                <div className="d-flex justify-content-around">
                <h3>${product.price}</h3>
                <Link to='/orders' onClick={handleClickProduct} className="btn btn-danger btn-sm">Buy now</Link>                    
                </div>
            </div>
        </div>
    </div>
    );
};

export default Products;