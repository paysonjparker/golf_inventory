import React, { useState } from 'react';
import dataSource from './dataSource';
import { useNavigate } from 'react-router-dom';

const CreateProduct = (props) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const updateName = (event) => {
        setName(event.target.value);
    };
    const updateDescription = (event) => {
        setDescription(event.target.value);
    };
    const updateBrand = (event) => {
        setBrand(event.target.value);
    };
    const updatePrice = (event) => {
        setPrice(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log("submit");
        const product = {
            name: name,
            description: description,
            brand: brand,
            price: price,
        };
        console.log(product);
        saveProduct(product);
    };

    const saveProduct = async (product) => {
        const response = await dataSource.post('/products', product);
        console.log(response);
        console.log(response.data);
        navigate("/");
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
            <h1>Create Product</h1>
                <div className="form-group">
                    <label for="productName">Product name</label>
                    <input type="text" className="form-control" id="productName" placeholder="Enter Product name" value={name} onChange={updateName}/>
                </div>
                <div className="form-group">
                    <label for="productDescription">Description</label>
                    <input type="text" className="form-control" id="productDescription" placeholder="Enter description" value={description} onChange={updateDescription}/>
                </div>
                <div className="form-group">
                    <label for="productBrand">Brand</label>
                    <input type="text" className="form-control" id="productBrand" placeholder="Enter brand" value={brand} onChange={updateBrand}/>
                </div>
                <div className="form-group">
                    <label for="productPrice">Price</label>
                    <input type="number" className="form-control" id="productPrice" placeholder="Enter price" value={price} onChange={updatePrice}/>
                </div>
                <button type="button" className="btn btn-light" onClick={handleCancel}>Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default CreateProduct;