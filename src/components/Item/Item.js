import React from 'react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Item.css';

const Item = ({ item, deleteItem }) => {
    const { name, img } = item;
    return (
        <div>
            <div className="selected-products">
                <img src={img} alt="" />
                <p>{name}</p>
                <FontAwesomeIcon onClick={() => deleteItem(item)} icon={faTrashCan}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Item;