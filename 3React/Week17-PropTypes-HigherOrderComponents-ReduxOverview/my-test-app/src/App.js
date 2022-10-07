import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {
  const API_URL = 'http://localhost:3500/items';


  const [items, setItems] = useState([]);
  // moved from Content.js and drilled down
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

  // console.log('before useEffect')
  // runs at every render
  useEffect(() => {
    // console.log('inside useEffect');
    // looking at state of items and then setting them as state
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        // console.log('listItems = ', listItems)
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    // simulating loading time
    setTimeout(() => {
      fetchItems();
    }, 2000)    
    // runs only at load time when array dependency changes
  }, [])
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
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          // passing props
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
