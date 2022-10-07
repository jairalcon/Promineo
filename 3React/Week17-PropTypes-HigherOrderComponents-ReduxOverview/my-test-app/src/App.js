import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  // moved from Content.js and drilled down
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));
  const [newItem, setNewItem] = useState('');
  const [ search, setSearch ] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    // saving to local storage when changes are made
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  // moved from Content.js and drilled down 
  const handleCheck = (id) => {
    console.log(`key: ${id}`);
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    // console.log('id:', id);
    // will create a new array that filters item.id === id
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log('added newItem:', newItem);
    // call addItem
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
      // passing props
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
      // passing props
        search={search}
        setSearch={setSearch}
      />
      <Content
      // passing props
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
