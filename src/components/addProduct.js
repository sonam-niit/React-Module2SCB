import React, { useState } from 'react';

function AddProduct({addProduct}) {

    const [product,setProduct]=useState({name:'',price:'',description:'',rating:''})
    const [validationErrors,setValidationErrors]=useState({});

    const validateForm=()=>{
        debugger;
        const errors={};

        if(!product.name){
            errors.name='Product Name is Required'
        }
        if(!product.price){
            errors.price='Product Price is Required'
        }
        if(!product.description){
            errors.description='Product Description is Required'
        }
        if(!product.rating){
            errors.rating='Product Rating is Required'
        }
        return errors;
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const errors= validateForm();
        if(Object.keys(errors).length===0){
            setValidationErrors({});
            addProduct(product);//add product to parent comp array
            setProduct({name:'',price:'',description:'',rating:''})//to make the input fields empty again
        }else{
            setValidationErrors(errors);
        }
    }
    return (<div>
        <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className={`form-group mt-3 ${validationErrors.name?'has-error':''}`}>
            <label for="name">Name</label>
            <input type="text" placeholder="Product Name" 
            className={`form-control ${validationErrors.name?'is-invalid':''}`}
            value={product.name} 
            onChange={(e)=> setProduct({...product,name:e.target.value})}/>

            {validationErrors.name &&
            <div className='invalid-feedback'>{validationErrors.name}</div>}
        </div>
        <div className={`form-group mt-3 ${validationErrors.price?'has-error':''}`}>
            <label for="price">Price</label>
            <input type="number" placeholder="Product Price" 
            className={`form-control ${validationErrors.price?'is-invalid':''}`}
            value={product.price} 
            onChange={(e)=> setProduct({...product,price:e.target.value})}/>

        {validationErrors.price &&
            <div className='invalid-feedback'>{validationErrors.price}</div>}
        </div>
        <div className={`form-group mt-3 ${validationErrors.description?'has-error':''}`}>
            <label for="desc">Description</label>
            <input type="text" placeholder="Product Description" 
            className={`form-control ${validationErrors.description?'is-invalid':''}`}
            value={product.description} 
            onChange={(e)=> setProduct({...product,description:e.target.value})}/>

        {validationErrors.description &&
            <div className='invalid-feedback'>{validationErrors.description}</div>}
        </div>
        <div className={`form-group mt-3 ${validationErrors.rating?'has-error':''}`}>
            <label for="rating">Rating</label>
            <input type="text" placeholder="Product Rating" 
            className={`form-control ${validationErrors.rating?'is-invalid':''}`}
            value={product.rating} 
            onChange={(e)=> setProduct({...product,rating:e.target.value})}/>

        {validationErrors.rating &&
            <div className='invalid-feedback'>{validationErrors.rating}</div>}
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Product</button>
      </form>
    </div>
    </div>  );
}

export default AddProduct;