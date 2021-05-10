import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer.js';
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
        <main>
            <div className="container">
            <div className="search-btn">
                <form action="">
                    <input className="text-center" type="search" name="search" placeholder="search" id="" />
                    <button class="btn btn-success btn-sm ms-5" type="submit">Search</button>
                </form>
            </div>
            <div>
                {
                    products.length === 0 &&

                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden"></span>
                    </div>

                }
                <div className="row mt-5">
                    {
                        products.map(product => <Products product={product} key={product._id}></Products>)
                    }
                </div>
            </div>
            
        </div>
        <Footer></Footer>
        </main>
    );
};

export default Home;