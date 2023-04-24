import React from 'react';
import dataSource from './dataSource';
import { useNavigate } from 'react-router-dom';

const DeleteProduct = (props) => {

    const navigate = useNavigate();

    let productId = window.location.pathname.substring(8);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log("submit");
            
        deleteProduct();
    };

    const deleteProduct = async (product) => {
        console.log('productId', productId);
        const response = await dataSource.delete(`/products/${productId}`);
        console.log(response);
        console.log(response.data);
        navigate("/");
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div className='container'>
            <h1>Are you sure you want to delete this post?</h1>
            <form onSubmit={handleFormSubmit}>
                <button type="button" className="btn btn-light" onClick={handleCancel}>Cancel</button>
                <button type="submit" className="btn btn-primary">Confirm</button>
            </form>
        </div>
    );
};

export default DeleteProduct;
