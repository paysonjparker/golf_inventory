import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import dataSource from './dataSource';
import ProductCard from './ProductCard';
// import ProductList from './ProductList';
import CreateProduct from './CreateProduct';
import DeleteProduct from './DeleteProduct'
import EditProduct from './EditProduct';

const App = () => {

  const [productList, setProductList] = useState([]);
  // const [currentlySelectedProductId, setCurrentlySelectedProductId] = useState(0);
  let refresh = false;

  useEffect(() => {
    loadProducts();
  }, [refresh]);

  const loadProducts = async () => {
    const response = await dataSource.get('/products');

    setProductList(response.data);
  };

  console.log('productList', productList);

  const renderedList = () => {
    return productList.map((product) => {
      return (
        <ProductCard
          key={product.productId}
          productId={product.productId}
          name={product.name}
          description={product.description}
          brand={product.brand}
          price={product.price}
        />
      );
    });
  };
  console.log('renderedList', renderedList);


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<div className='container'>{renderedList()}</div>} />
        <Route exact path='/create' element={<CreateProduct />}/>
        <Route exact path='/delete/:productId' element={<DeleteProduct />} />
        <Route exact path='/edit/:productId' element={<EditProduct />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
