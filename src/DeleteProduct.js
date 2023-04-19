import React, { useState } from 'react';
import dataSource from './dataSource';
import { useNavigate } from 'react-router-dom';

const DeleteProduct = (props) => {

    const navigate = useNavigate();

    const deleteProduct = async (product) => {
        const response = await dataSource.delete(`/products/${props.match.params.productId}`);
        console.log(response);
        console.log(response.data);
        navigate("/");
    };
    deleteProduct();

    return (
        <div>Delete page</div>
    );
};

export default DeleteProduct;
