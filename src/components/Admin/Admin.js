import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import './Admin.css'
import { Link } from 'react-router-dom';
// import ProductDetails from '../Products/ProductDetails';
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const [Toggle, setToggle] = useState(false)
    const [productDetail, setProductDetails] = useState([])
    const onSubmit = data => {
        const ProductData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        }
        const url = `http://localhost:4000/addProduct`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ProductData)
        })
            .then(res => {
                console.log(res);
            })
    }
    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProductDetails(data))

    }, [])

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '29b1c64e598ee537f85df26a7dbce39f')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)

            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleDelete = id => {
        fetch(`http://localhost:4000/deleteProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="container row justify-content-evenly">
            <div className="col-md-5 sidebar">
                <ul>
                    <li>
                        <Link to='admin/details' onClick={() => setToggle(true)}><FontAwesomeIcon icon={faQrcode} />Manage Product</Link>

                    </li>
                    <li>
                        <Link to='#'><FontAwesomeIcon icon={faPlus} />Add Product</Link>

                    </li>
                    <li>
                        <Link ><FontAwesomeIcon icon={faEdit} />Edit Product</Link>
                    </li>
                </ul>
            </div>
            {
                Toggle ?
                    <div className="col-md-7 ">

                        {/* <ProductDetails></ProductDetails> */}
                        {
                            productDetail.map(pd =>
                                <div className=" d-flex justify-content-around details">
                                    <h5>{pd.name}</h5>
                                
                                <li>{pd.weight}</li>
                                <li>${pd.price}</li>
                                <button onClick={()=>handleDelete(pd._id)} className="btn btn-danger btn-sm">Delete</button>
                                    {/* <table class="table">
                                        <thead>
                                            <tr>

                                                <th className="text-center" scope="col">Name</th>
                                                <th className="text-center"scope="col">weight</th>
                                                <th className="text-center"scope="col">price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                
                                                <td className="text-center">{pd.name}</td>
                                                <td className="text-center">{pd.weight}</td>
                                                <td className="text-center">${pd.price}</td>
                                            </tr>
                                            
                                                
                                                
                                        </tbody>
                                    </table> */}
                                </div>)
                        }

                    </div>


                    :
                    <div className="col-md-7 addProduct">
                        <h3 style={{color:'green'}}>Add Your Product here</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor=""><b>Product Name</b></label><br />
                            <input name="name" placeholder="new product" ref={register} /><br />
                            <label htmlFor=""><b>Weight</b></label><br />
                            <input name="weight" placeholder="weight" ref={register} /><br />
                            <label htmlFor=""><b>price</b></label><br />
                            <input name="price" placeholder="Enter a price" ref={register} /><br />
                            <label htmlFor=""><b>Upload image</b></label><br />
                            <input type="file" onChange={handleImageUpload} />

                            <input type="submit" className="submit-btn" />
                        </form>
                    </div>
            }
        </div>
    );
};

export default Admin;