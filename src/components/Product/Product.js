import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({ handler, product }) => {
    const { name, img, price } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handler(product)} className='cart-btn'>Add To Cart <FontAwesomeIcon className='fa-cart-icon' icon={faCartShopping}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Product;