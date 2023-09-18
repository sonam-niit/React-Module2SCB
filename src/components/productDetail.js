import React, { useState } from 'react';

//Destructing of props object
function ProductDetail({product}) {

    //const product= props.product;
    return (<div>
        <h2>Product Details</h2>
        <h3>Name: {product.name}</h3>
        <h3>Price: {product.price}</h3>
        <h3>Description: {product.description}</h3>
        <h3>Rating: {product.rating}</h3>
    </div>  );
}

export default ProductDetail;