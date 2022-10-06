import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  // moved from Content.js and drilled down
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
  // moved from Content.js and drilled down 
  const handleCheck = (id) => {
    console.log(`key: ${id}`);
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
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
    <div className="App">
      <Header title="Grocery List" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
