import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);



    const addProductHandle = (product) => {
        const exist = selectedItems.find(item => item.id === product.id);
        if (selectedItems.length < 4 && !exist) {
            const newSelectedItems = [...selectedItems, product];
            setSelectedItems(newSelectedItems);
            // console.log(selectedItems[product]);
        } else if (exist) {
            alert('Hey! You already select this Item');
        } else {
            alert("Opps! You have already selected 4 items.")
        }
    };

    const selectProduct = () => {
        const max = selectedItems.length;
        const a = Math.floor(Math.random() * (max));
        setSelectedItems([selectedItems[a]])
    }

    const selectAgain = () => {
        setSelectedItems([]);
    }

    const deleteItem = (item) => {
        const newSelectedItems = selectedItems.filter(sItem => sItem.id !== item.id);
        setSelectedItems(newSelectedItems);
    }

    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product handler={addProductHandle} product={product} key={product.id}></Product>)
                }
            </div>
            <div className="selector-machine">
                <h2>Selected Product</h2>
                <div className="machine-body">
                    {
                        selectedItems.map(item => <Item deleteItem={deleteItem} item={item} key={item.id}></Item>)
                    }

                    <button onClick={selectProduct} className='slect-btn'>Select the best one</button>
                    <button onClick={selectAgain} className='select-again-btn'>Select again</button>
                </div>
            </div>
        </div >
    );
};

export default Shop;