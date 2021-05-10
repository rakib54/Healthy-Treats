import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import './AddProduct.css'

const AddProduct = () => {
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const ProductData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        }
        const url = `https://pacific-beach-82940.herokuapp.com/addProduct`

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
        alert('Product added successfully')
    }
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
    return (

        <div className="row font-link">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5 p-5">
                <h3 style={{ color: 'green' }}>Add Your Product here</h3>
                <div>

                    <form className="addProduct" onSubmit={handleSubmit(onSubmit)}>
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
            </div>
        </div>

    );
};

export default AddProduct;