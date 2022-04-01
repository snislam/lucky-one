import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
            <div className="selector-machine">
                <h2>Select Your Product</h2>
                <div className="machine-body">
                    <li>Item one</li>

                    <button className='slect-btn'>Select the best one</button>
                    <button className='select-again-btn'>Select again</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;