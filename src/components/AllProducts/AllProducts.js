import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AllProducts = () => {
    const [productDetail, setProductDetails] = useState([])

    useEffect(() => {
        fetch('https://pacific-beach-82940.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProductDetails(data))

    }, [])
    const handleDelete = (id) => {
        fetch(`https://pacific-beach-82940.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        alert('Product delete successfully')
         
    }
    return (
        <div className="row font-link">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 d-flex justify-content-center p-5">
            <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className="text-secondary" scope="col">Name</th>
                                    <th className="text-secondary" scope="col">Description</th>
                                    <th className="text-secondary" scope="col">PaymentId</th>
                                    <th className="text-secondary" scope="col">Booking Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productDetail.map(pd =>
                                        <tr key={pd._id}>

                                            <td className="text-color">{pd.name}</td>
                                            <td>{pd.weight}</td>
                                            <td>{pd.price}</td>
                                            <td><button onClick={() => handleDelete(pd._id)} className="btn btn-danger btn-sm">Delete</button></td>
                                        </tr>

                                    )
                                }
                                <tr>


                                </tr>
                            </tbody>
                        </table>
            </div>
        </div>
    );
};

export default AllProducts;