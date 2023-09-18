import React, { useState } from "react";
import productsData from "../assets/products.json";
import ProductDetail from "./productDetail";
import AddProduct from "./addProduct";
import { toast } from "react-toastify";

function ProductList() {

  const [products,setProducts]=useState(productsData);//initial value is the product Data 
  const [selected, setSelected] = useState(null);
  const onSelectItem = (item) => {
    setSelected(item);
  };
  //create function which accepts Product Object
  const addProduct=(obj)=>{
        obj.id= products.length+1;
        setProducts([...products,obj]);//update your products array
        toast.success("Product Added Successfully..!!")
  }
  const tabRow = products.map((item, index) => {
    return (
      <tr key={index} onClick={() => onSelectItem(item)}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.description}</td>
        <td>{item.rating}</td>
      </tr>
    );
  });
  return (
    <div>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{tabRow}</tbody>
      </table>
      <div className="row">
        <div className="col">
          <AddProduct addProduct={addProduct} /> 
          {/* Passing function as a prop */}
        </div>
        <div className="col">
          {selected && <ProductDetail product={selected} />}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
