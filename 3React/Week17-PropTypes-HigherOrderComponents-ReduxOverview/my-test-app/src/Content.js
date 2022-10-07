import React from 'react';
import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <>
            {/* adding message to show that list is empty */}
            {items.length ? (
                // passing down props to ItemList
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty</p>
            )}
        </>
    );
}

export default Content;