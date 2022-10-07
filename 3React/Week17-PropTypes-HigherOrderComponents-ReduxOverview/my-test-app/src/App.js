import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {
  // moved from Content.js and drilled down
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);
  const [newItem, setNewItem] = useState('');
  const [ search, setSearch ] = useState('');

  // console.log('before useEffect')
  // runs at every render
  useEffect(() => {
    // console.log('inside useEffect');
    // looking at state of items and then setting them as state
    localStorage.setItem('shoppingList', JSON.stringify(items));
    // runs only at load time when array dependency changes
  }, [items])
  // console.log('after useEffect')

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  // moved from Content.js and drilled down 
  const handleCheck = (id) => {
    console.log(`key: ${id}`);
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    // console.log('id:', id);
    // will create a new array that filters item.id === id
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
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
