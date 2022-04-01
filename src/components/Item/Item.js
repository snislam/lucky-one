import React from 'react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Item.css';

const Item = ({ item }) => {
    const { name, img } = item;
    return (
        <div>
            <div className="selected-products">
                <img src={img} alt="" />
                <p>{name}</p>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Item;