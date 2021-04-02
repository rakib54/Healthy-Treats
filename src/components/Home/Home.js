import React, { useEffect, useState } from 'react';
import Products from '../Products/Products.js'
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://pacific-beach-82940.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container">
            <div className="search-btn">
                <form action="" >
                    <input type="search" name="search" placeholder="search" id="" />
                    <button class="btn btn-success btn-sm" type="submit">Search</button>
                </form>
            </div>
            <div className='row'>
                {
                    products.length === 0 &&

                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden"></span>
                    </div>

                }
                {
                    products.map(product => <Products product={product} key={product._id}></Products>)
                }
            </div>

        </div>
    );
};

export default Home;