import React from 'react';
import LineItem from './LineItem';

// prop drilling from Content.js
const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                // passing down props to LineItem
                <LineItem
                    key={item.id} 
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    );
}

export default ItemList