import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [buyProducts , setBuyProducts] = useState([])

    useEffect(()=>{
        fetch(`https://pacific-beach-82940.herokuapp.com/buyProducts`)
        .then(res =>res.json())
        .then(data => setBuyProducts(data[0]))
    },[])
    return (
        <div className="container">
            <h1>You have {buyProducts.length} orders</h1>
            <p>Your Order Date: {buyProducts.CurrentDate}</p>
            <p>Your Order Time: {buyProducts.currentTime}</p>
            <Link to='/checkout' className="btn btn-success btn-sm">Checkout</Link>
        </div>
    );
};

export default Orders;