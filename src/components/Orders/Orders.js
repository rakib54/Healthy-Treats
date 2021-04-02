import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [buyProducts , setBuyProducts] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:4000/buyProducts`)
        .then(res =>res.json())
        .then(data => setBuyProducts(data[0]))
    },[])
    return (
        <div className="container">
            <h1>You have {buyProducts.length} orders</h1>
            <p>Your Order Date: {buyProducts.CurrentDate}</p>
            <p>Your Order Time: {buyProducts.currentTime}</p>
        </div>
    );
};

export default Orders;