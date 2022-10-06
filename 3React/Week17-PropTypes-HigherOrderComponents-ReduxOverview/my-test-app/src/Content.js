import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const handleCheck = (id) => {
        console.log(`key: ${id}`);
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
        setItems(listItems);
        // saving to local storage when changes are made
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        // console.log('id:', id);
        // will create a new array that filters item.id === id
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        // saving to local storage when changes are made
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

    return (
        <main>
            {/* adding message to show that list is empty */}
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            <input
                                type='checkbox'
                                // passing anon function with functions passing in item.id
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label 
                                onDoubleClick={() => handleCheck(item.id)}
                                style={(item.checked)? { textDecoration: 'line-through' } : null}
                            >{item.item}</label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)} 
                                role='button' 
                                tabIndex='0' 
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty</p>
            )}
        </main>
    );
}

export default Content;