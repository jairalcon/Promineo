import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
        // adding state
        value={newItem}
        // linking to OST (one source of truth) - setting State
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type='submit'
        aria-label='Add Item'
        // using anonF to use inputRef
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem