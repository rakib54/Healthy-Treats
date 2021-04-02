// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import './ProductDetails.css'

// const ProductDetails = () => {
//     const [productDetail, setProductDetails] = useState([])
//     useEffect(()=>{
//         fetch('http://localhost:4000/products')
//         .then(res => res.json())
//         .then(data => setProductDetails(data))
//     },[])
//     return (
//         <div className='details'>

//             {
//                 productDetail.map(details => {
//                     <li>{details.name}</li>
//                 })
//             }
//         </div>
//     );
// };

// export default ProductDetails;