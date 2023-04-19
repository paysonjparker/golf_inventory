import React from 'react';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

const ProductList = (props) => {

    const handleSelectionOne = (productId) => {
        console.log('Selected ID is ' + productId);
        props.onClick(productId, navigator);
    };

    console.log('props productList', props);
    const navigator = useNavigate();
    const products = props.productList.map((product) => {
        return (
            <ProductCard
                key={product.productId}
                productId={product.productId}
                name={product.name}
                description={product.description}
                brand={product.brand}
                price={product.price}
                onClick={handleSelectionOne}
            />
        );
    });

    return <div className='container'>{products}</div>
};

export default ProductList;